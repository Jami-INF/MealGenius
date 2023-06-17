import { Image, StyleSheet, View, FlatList} from "react-native";
import { Meal } from "../models/Meal";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import CustomText from "../components/CustomText";
import { Divider, IconButton, Portal, Surface, Text } from "react-native-paper";
import React from "react";
import { Ingredient } from "../models/Ingredient";
import Time from "../components/Time";
import { Ionicons } from "@expo/vector-icons";

type MealDetailsScreenProps = {
    route: {
        params: {
            meal: Meal
        }
    }
}

export default function MealDetailsScreen(props: MealDetailsScreenProps): JSX.Element  {

    return (
        <View style={styles.container}>
            <BackButton/>
            <Portal>
                <IconButton icon="star" 
                            onPress={() => console.log("Favorite button pressed")}
                            size={30}
                            iconColor="black"
                            mode="contained-tonal"
                            style={styles.favoriteButton}
                            animated={true}/>
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
                        
                        {/* <FlatList data={props.route.params.meal.steps}
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
                                    </Surface>}/> */}
                        
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