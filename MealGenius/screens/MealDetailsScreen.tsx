import { Image, StyleSheet, View, FlatList } from "react-native";
import { Meal } from '../models/Meal';
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import CustomText from "../components/CustomText";
import { Divider, IconButton, Portal, Surface, Text } from "react-native-paper";
import Time from "../components/Time";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import { Ingredient } from "../models/Ingredient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { DarkThemeContext } from "../App";
import { useDispatch } from "react-redux";
import { addFavoriteMeal, removeFavoriteMeal } from "../redux/actions/actionFavoriteMeals";

export default function MealDetailsScreen(): JSX.Element  {
    const route = useRoute();
    // @ts-ignore
    const meal: Meal = route.params.meal;

    const [isFavorite, setIsFavorite] = useState(false); // État du plat favori
    const { theme } = useContext(DarkThemeContext);
    const dispatch = useDispatch(); 

    useEffect(() => {
        checkFavoriteStatus(); // Vérifier si le plat est déjà en favori lors du chargement du composant
    }, []);

    const getFavorites = async () => {
        try {
            const jsonFavorite = await AsyncStorage.getItem('favorites')
            if (jsonFavorite != null) {
                const jsonFavorites = JSON.parse(jsonFavorite)
                const favorites: Meal[] = [];
                for (let i = 0; i < jsonFavorites.length; i++) {
                    let m: Meal = new Meal(jsonFavorites[i]._id, jsonFavorites[i]._name, jsonFavorites[i]._description, jsonFavorites[i]._image, jsonFavorites[i]._duration, jsonFavorites[i]._ingredients, jsonFavorites[i]._type, jsonFavorites[i]._steps, jsonFavorites[i]._complexity);
                    favorites.push(m);
                }
                return favorites;
            }
        } catch (e) {
            console.log("An error occurred", e);
        }
    }
    const checkFavoriteStatus = async () => {
        try {
            const favorites = await getFavorites();
            if (favorites) {
                const isAlreadyFavorite = favorites.some(
                    (favorite: Meal) => favorite.id === meal.id
                );
                setIsFavorite(isAlreadyFavorite);
            } else {
                setIsFavorite(false);
            }
        } catch (error) {
            console.log("Error retrieving favorites from AsyncStorage: ", error);
        }
    };

    function addToFavorites(meal: Meal) {
        setIsFavorite(true);
        // @ts-ignore
        dispatch(addFavoriteMeal(meal))
    };

    function removeFromFavorites(meal: Meal) {
        setIsFavorite(false);
        // @ts-ignore
        dispatch(removeFavoriteMeal(meal))
    };

    const handleFavoritePress = async () => {
        if (isFavorite) {
            removeFromFavorites(meal); // Supprimer le plat des favoris
        } else {
            addToFavorites(meal); // Ajouter le plat aux favoris
        }
    };


        return (
            <View style={styles(theme).container}>
                <BackButton/>
                <Portal>
                    <IconButton
                        icon={isFavorite ? "star" : "star-outline"} // Utiliser le bon logo en fonction de l'état du plat favori
                        onPress={handleFavoritePress}
                        size={30}
                        iconColor="black"
                        mode="contained-tonal"
                        style={styles(theme).favoriteButton}
                        animated={true}
                    />
                </Portal>

                <Image style={styles(theme).image} source={{uri: meal.image}}/>

                <ScrollView style={styles(theme).scrollview}
                            bounces={false}>

                    <View style={styles(theme).body}>
                        <View style={styles(theme).title}>
                            <CustomText text={meal.name} textType="title"/>
                        </View>

                        <View style={styles(theme).mealInformation}>
                            <CustomText text={"Ingrédients"} textType="subtitle"/>
                            <FlatList data={meal.ingredients}
                                      renderItem={({item}) => <Text style={styles(theme).ingredient} >{getIngredientText(item)}</Text>}
                                      style={styles(theme).ingredients}
                                      scrollEnabled={false}/>

                            <Divider style={styles(theme).divider}/>

                            <CustomText text={"Préparation"} textType="subtitle"/>

                            <FlatList data={meal.steps}
                                      style={styles(theme).steps}
                                      scrollEnabled={false}
                                      renderItem={({item, index}) =>
                                          <Surface style={styles(theme).card}>
                                              <View>
                                                  <View style={styles(theme).cardHeader}>
                                                      <Text variant="titleLarge" style={styles(theme).titlesStep}>{`Etape ${index + 1}`}</Text>
                                                      <View style={styles(theme).clock}>
                                                          <Ionicons name="time-outline" style={{color: theme.secondaryTextColor}} size={20}/>
                                                          <Time time={item.duration} fontSize={17}/>
                                                      </View>
                                                  </View>

                                                  <Text style={styles(theme).step}>{item.description}</Text>
                                              </View>
                                          </Surface>}/>

                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }

    function getIngredientText(ingredient: Ingredient): string {
        return `- ${ingredient.quantity} ${ingredient.unit} de ${ingredient.food.name}`;
    }

    const styles = (theme) => StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 250,
            zIndex: -1,
        },
        body: {
            borderRadius: 20,
            backgroundColor: theme.surfaceColor,
            marginTop: 230,
            minHeight: 700
        },
        scrollview : {
            backgroundColor: "transparent",
            width: '100%'
        },
        title: {
            alignItems: "center",
            marginVertical: 20
        },
        mealInformation: {
            marginHorizontal: 30,
        },
        ingredient: {
            color: theme.textColor,
            marginVertical: 10,
            marginLeft: 10,
        },
        ingredients: {
            marginTop: 10,
            marginBottom: 20
        },
        steps: {
            marginTop: 10
        },
        step: {
            marginVertical: 10,
            marginHorizontal: 10,
            color: theme.textColor,
        },
        titleStep: {
            marginVertical: 10,
            marginLeft: 10,
            fontSize: 20,
            fontWeight: "bold"
        },
        titlesStep: {
            marginTop: 5,
            marginBottom: 10,
            marginHorizontal: 10,
            color: theme.textColor
        },
        card: {
            width: "auto",
            borderRadius: 20,
            flexDirection: "row",
            minHeight: 50,
            minWidth: "100%",
            height: "auto",
            marginHorizontal: 3,
            marginVertical: 10,
            backgroundColor: theme.backgroundColor
        },
        divider: {
            marginVertical: 10
        },
        clock: {
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
        },
        cardHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            maxWidth: "100%",
            minWidth: "100%"
        },
        favoriteButton: {
            margin: 10,
            position: "absolute",
            top: 0,
            right: 0,
        }
    });