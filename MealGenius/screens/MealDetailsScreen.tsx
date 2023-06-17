import { Image, StyleSheet, View, FlatList } from "react-native";
import { Meal } from "../models/Meal";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import CustomText from "../components/CustomText";
import { Divider, IconButton, Portal, Surface, Text } from "react-native-paper";
import Time from "../components/Time";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Ingredient } from "../models/Ingredient";
import AsyncStorage from "@react-native-async-storage/async-storage";

type MealDetailsScreenProps = {
    route: {
        params: {
            meal: Meal;
        }
    },
    theme: Record<string, string>
}
    
};
export default function MealDetailsScreen(props: MealDetailsScreenProps): JSX.Element  {

    const [isFavorite, setIsFavorite] = useState(false); // État du plat favori

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


        return (
            <View style={styles.container}>
                <BackButton/>
                <Portal>
                    <IconButton
                        icon={isFavorite ? "star" : "star-outline"} // Utiliser le bon logo en fonction de l'état du plat favori
                        onPress={handleFavoritePress}
                        size={30}
                        iconColor="black"
                        mode="contained-tonal"
                        style={styles.favoriteButton}
                        animated={true}
                    />
                </Portal>

                <Image style={styles.image} source={{uri: props.route.params.meal.image}}/>

                <ScrollView style={styles.scrollview}
                            bounces={false}>

                    <View style={styles.body}>
                        <View style={styles.title}>
                            <CustomText text={props.route.params.meal.name} textType="title"/>
                        </View>

                        <View style={styles.mealInformation}>
                            <CustomText text={"Ingrédients"} textType="subtitle"/>
                            <FlatList data={props.route.params.meal.ingredients}
                                      renderItem={({item}) => <Text style={styles.ingredient} >{getIngredientText(item)}</Text>}
                                      style={styles.ingredients}
                                      scrollEnabled={false}/>

                            <Divider style={styles.divider}/>

                            <CustomText text={"Préparation"} textType="subtitle"/>

                            <FlatList data={props.route.params.meal.steps}
                                      style={styles.steps}
                                      scrollEnabled={false}
                                      renderItem={({item, index}) =>
                                          <Surface style={styles.card}>
                                              <View>
                                                  <View style={styles.cardHeader}>
                                                      <Text variant="titleLarge" style={styles.titlesStep}>{`Etape ${index + 1}`}</Text>
                                                      <View style={styles.clock}>
                                                          <Ionicons name="time-outline" size={20}/>
                                                          <Time time={item.duration} fontSize={17}/>
                                                      </View>
                                                  </View>

                                                  <Text style={styles.step}>{item.description}</Text>
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

    const styles = StyleSheet.create({
        container: {
            flex: 1
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
            backgroundColor: 'white',
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
            marginHorizontal: 10
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
        },
        card: {
            width: "auto",
            borderRadius: 20,
            flexDirection: "row",
            minHeight: 50,
            minWidth: "100%",
            height: "auto",
            marginHorizontal: 3,
            marginVertical: 10
        },
        divider: {
            marginVertical: 10
        },
        clock: {
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10
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