import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Meal } from "../models/Meal";
import FavoriteCards from "../components/FavoriteCards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {Step} from "../models/Step";
import {Ingredient} from "../models/Ingredient";

const FavoriteScreen = () => {
    const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);
    const [isFavoritesChanged, setIsFavoritesChanged] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const fetchFavorites = async () => {
                try {
                    const favorites = await getFavorites();
                    setFavoriteMeals(favorites);
                } catch (error) {
                    console.log(
                        "Error retrieving favorites from AsyncStorage: ",
                        error
                    );
                }
            };
            fetchFavorites();
        }, [isFavoritesChanged])
    );

    const getFavorites = async () => {
        try {
            const jsonFavorite = await AsyncStorage.getItem("favorites");
            if (jsonFavorite != null) {
                const jsonFavorites = JSON.parse(jsonFavorite);
                const favorites: Meal[] = [];

                for (let i = 0; i < jsonFavorites.length; i++) {
                    const meal = jsonFavorites[i];
                    const ingredients = meal._ingredients.map((jsonIngredient) => {
                        return new Ingredient(
                            jsonIngredient._id,
                            jsonIngredient._food,
                            jsonIngredient._unit,
                            jsonIngredient._quantity
                        );
                    });
                    const steps = meal._steps.map((jsonStep) => {
                        return new Step(
                            jsonStep._id,
                            jsonStep._description,
                            jsonStep._number,
                            jsonStep._duration
                        );
                    });

                    let m: Meal = new Meal(
                        meal._id,
                        meal._name,
                        meal._description,
                        meal._image,
                        meal._duration,
                        ingredients,
                        meal._type,
                        steps,
                        meal._complexity
                    );
                    favorites.push(m);
                }
                return favorites;
            }
        } catch (e) {
            console.log("An error occurred", e);
        }

        return [];
    };


    const removeFromFavorites = async (plat: Meal) => {
        try {
            const favorites = await getFavorites();
            if (favorites) {
                const updatedFavorites = favorites.filter(
                    (favorite: Meal) => favorite.id !== plat.id
                );
                await AsyncStorage.setItem(
                    "favorites",
                    JSON.stringify(updatedFavorites)
                );
                setIsFavoritesChanged(!isFavoritesChanged);
            }
        } catch (error) {
            console.log("Error removing from favorites in AsyncStorage: ", error);
        }
    };

interface FavoriteScreenProps {
    theme: Record<string, string>,
}
export default function FavoriteScreen(props: FavoriteScreenProps) {
    return (
        <View style={styles(props.theme).container}>
            <View style={styles(props.theme).FavoriteItem}>
                <FavoriteCards
                    meals={favoriteMeals}
                    removeFavorite={(meal: Meal) => removeFromFavorites(meal)}
                    theme={props.theme}
                />
            </View>
        </View>
    );
};

const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    favoriteItem: {
        marginBottom: 30,
        marginHorizontal: 10,
    }
});

export default FavoriteScreen;
