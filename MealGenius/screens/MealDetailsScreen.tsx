import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { Meal } from "../models/Meal";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import CustomText from "../components/CustomText";
import { IconButton } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { Ingredient } from "../models/Ingredient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Step} from "../models/Step";

type MealDetailsScreenProps = {
    route: {
        params: {
            meal: Meal;
        };
    };
};

const MealDetailsScreen = (props: MealDetailsScreenProps): JSX.Element => {
    const [isFavorite, setIsFavorite] = useState(false); // État du plat favori

    useEffect(() => {
        checkFavoriteStatus(); // Vérifier si le plat est déjà en favori lors du chargement du composant
    }, []);

    const getFavorites = async () => {
        try {
            const jsonFavorite = await AsyncStorage.getItem('favorites')
            if(jsonFavorite != null){
                const jsonFavorites = JSON.parse(jsonFavorite)
                const favorites : Meal[] = [];
                for(let i = 0; i < jsonFavorites.length; i++){
                    let m : Meal = new Meal(jsonFavorites[i]._id, jsonFavorites[i]._name, jsonFavorites[i]._description, jsonFavorites[i]._image, jsonFavorites[i]._duration, jsonFavorites[i]._ingredients, jsonFavorites[i]._type, jsonFavorites[i]._steps, jsonFavorites[i]._complexity);
                    favorites.push(m);
                }
                return favorites;
            }
        } catch(e) {
            console.log("An error occurred", e);
        }
    }
    const checkFavoriteStatus = async () => {
        try {
            const favorites = await getFavorites();
            if (favorites) {
                const isAlreadyFavorite = favorites.some(
                    (favorite: Meal) => favorite.id === props.route.params.meal.id
                );
                setIsFavorite(isAlreadyFavorite);
            } else {
                setIsFavorite(false);
            }
        } catch (error) {
            console.log("Error retrieving favorites from AsyncStorage: ", error);
        }
    };

    const addToFavorites = async (plat: Meal) => {
        try {
            const favorites = await getFavorites();
            let updatedFavorites = [];

            if (favorites) {
                let isAlreadyFavorite = false;
                // Vérifier si le plat existe déjà dans les favoris
                favorites.forEach((favorite: Meal) => {
                    if (favorite.id === plat.id) {
                        isAlreadyFavorite = true;
                    }
                });
                if (isAlreadyFavorite) {
                    setIsFavorite(true); // Mettre à jour l'état du plat favori
                    return;
                }
                updatedFavorites = [...favorites, plat];
            } else {
                // Aucun favori existant, ajouter le nouveau plat comme le premier favori
                updatedFavorites = [plat];
            }

            await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setIsFavorite(true); // Mettre à jour l'état du plat favori
        } catch (error) {
            console.log("Error adding to favorites in AsyncStorage: ", error);
        }
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

                setIsFavorite(false); // Mettre à jour l'état du plat favori
            }
        } catch (error) {
            console.log("Error removing from favorites in AsyncStorage: ", error);
        }
    };
    const handleFavoritePress = async () => {
        if (isFavorite) {
            await removeFromFavorites(props.route.params.meal); // Supprimer le plat des favoris
        } else {
            await addToFavorites(props.route.params.meal); // Ajouter le plat aux favoris
        }
    };

    function getIngredientText(ingredient: Ingredient): string {
        return `- ${ingredient.quantity} ${ingredient.unit} de ${ingredient.food.name}`;
    }

    return (
        <View style={styles.container}>
            <BackButton />
            <Image style={styles.image} source={{ uri: props.route.params.meal.image }} />
            <ScrollView style={styles.scrollview} bounces={false}>
                <View style={styles.body}>
                    <View style={styles.title}>
                        <CustomText text={props.route.params.meal.name} textType="title" />
                    </View>
                    <View>
                        <IconButton
                            icon={isFavorite ? "star" : "star-outline"} // Utiliser le bon logo en fonction de l'état du plat favori
                            onPress={handleFavoritePress}
                            size={30}
                            iconColor="black"
                            mode="contained-tonal"
                            animated={true}
                        />
                    </View>
                    <View style={styles.mainText}>
                        <CustomText text={"Ingrédients"} textType="subtitle" />
                        <FlatList
                            data={props.route.params.meal.ingredients}
                            renderItem={({ item }) => (
                                <Text style={styles.ingredient}>{getIngredientText(item)}</Text>
                            )}
                            style={styles.ingredients}
                        />

                        <FlatList
                            data={props.route.params.meal.steps}
                            renderItem={({ item }) => (
                                <View>
                                    <Text style={styles.step}>{`Step ${item.number}`}</Text>
                                    <Text style={styles.step}>{item.description}</Text>
                                </View>
                            )}
                            style={styles.steps}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 250,
        zIndex: -1,
    },
    body: {
        borderRadius: 20,
        backgroundColor: "white",
        marginTop: 230,
        height: 1000,
    },
    scrollview: {
        backgroundColor: "transparent",
        height: 100,
        width: "100%",
    },
    title: {
        alignItems: "center",
        marginTop: 20,
    },
    mainText: {
        marginHorizontal: 30,
    },
    ingredient: {
        marginVertical: 10,
        marginLeft: 10,
    },
    ingredients: {
        marginTop: 10,
    },
    steps: {
        marginTop: 10,
    },
    step: {
        marginVertical: 10,
        marginLeft: 10,
    },
});

export default MealDetailsScreen;
