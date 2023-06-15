import { Image, StyleSheet, Text, View, FlatList} from "react-native";
import { Meal } from "../models/Meal";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import CustomText from "../components/CustomText";
import { IconButton } from "react-native-paper";
import React from "react";
import { Ingredient } from "../models/Ingredient";

type MealDetailsScreenProps = {
    route: {
        params: {
            meal: Meal
        }
    }
}

// @ts-ignore
export default function MealDetailsScreen(props: MealDetailsScreenProps): JSX.Element  {

    return (
        <View style={styles.container}>
            <BackButton/>
            <Image style={styles.image} source={{uri: props.route.params.meal.image}}/>
            <ScrollView style={styles.scrollview}
                        bounces={false}>
              
                <View style={styles.body}>  
                    <View style={styles.title}>
                        <CustomText text={props.route.params.meal.name} textType="title"/>
                    </View>
                    <View>
                        <IconButton icon="star" 
                                    onPress={() => console.log("Favorite button pressed")}
                                    size={30}
                                    iconColor="black"
                                    mode="contained-tonal"
                                    animated={true}/>
                    </View>
                    <View style={styles.mainText}>
                        <CustomText text={"Ingrédients"} textType="subtitle"/>
                        <FlatList data={props.route.params.meal.ingredients}
                                    renderItem={({item}) => <Text style={styles.ingredient} >{getIngredientText(item)}</Text>}
                                    style={styles.ingredients}/>

                        <FlatList data={props.route.params.meal.steps}
                                    renderItem={({item}) => 
                                        <View>
                                            <Text style={styles.step} >{`Step ${item.number}`}</Text>
                                            <Text style={styles.step} >{item.description}</Text>
                                        </View>}
                                    style={styles.steps}/>
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
        height: 1000
    },
    scrollview : {
        backgroundColor: "transparent",
        height: 100,
        width: '100%'
    },
    title: {
        alignItems: "center",
        marginTop: 20
    },
    mainText: {
        marginHorizontal: 30,
    },
    ingredient: {
        marginVertical: 10,
        marginLeft: 10,
    },
    ingredients: {
        marginTop: 10
    },
    steps: {
        marginTop: 10
    },
    step: {
        marginVertical: 10,
        marginLeft: 10,
    }
}); 