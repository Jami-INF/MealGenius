import { Button, IconButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import CustomText from '../components/CustomText';
import { Meal } from "../models/Meal";
import { getFoods, getMeals } from "../stub/stub";
import MealCards from "../components/MealCards";
import React, { useContext, useState } from 'react';
import IngredientAddModal from "../components/IngredientAddModal";
import { Food } from "../models/Food";
import IngredientsModal from "../components/IngredientsModal";
import { ScrollView } from "react-native-gesture-handler";
import { DarkThemeContext } from "../App";

const meals: Meal[] = getMeals();
const foods: Food[] = getFoods();

export default function PantryScreen(): JSX.Element {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isIngredientsModalVisible, setIngredientsModalVisible] = useState(false);
    const { theme } = useContext(DarkThemeContext);

    const openModal = () => {
      setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const validateModal = () => {
        setModalVisible(false);
    };

    const closeIngrediensModal = () => {
        setIngredientsModalVisible(false);
    };

    const openIngredientsModal = () => {
        setIngredientsModalVisible(true);
      };

    const validateIngredientsModal = () => {
        this.selectedFoods = [];
        setIngredientsModalVisible(false);
    };

    return (
        <View style={styles(theme).container}>
            <View style={styles(theme).buttonContainer}>
                <Button icon="fridge" 
                    mode="contained-tonal" 
                    onPress={openIngredientsModal}>
                    Mes ingrédients
                </Button>
                
                <IconButton icon="plus"
                            size={20}
                            mode="contained-tonal" 
                            onPress={openModal}/>
            </View>
            <ScrollView>
                <View style={styles(theme).mealTypeContainer}>
                    <View style={styles(theme).mealTypeText}>
                        <CustomText text="Mes entrées" textType="subtitle"/>
                    </View>
                    <View>
                        <MealCards meals={meals.filter((meal: Meal) => meal.type === "starter")}/>
                    </View>
                </View>
                <View style={styles(theme).mealTypeContainer}>
                    <View style={styles(theme).mealTypeText}>
                        <CustomText text="Mes plats" textType="subtitle"/>
                    </View>
                    <View>
                        <MealCards meals={meals.filter((meal: Meal) => meal.type === "main course")}/>
                    </View>
                </View>
                <View style={styles(theme).mealTypeContainer}>
                    <View style={styles(theme).mealTypeText}>
                        <CustomText text="Mes desserts" textType="subtitle"/>
                    </View>
                    <View>
                        <MealCards meals={meals.filter((meal: Meal) => meal.type === "dessert")}/>
                    </View>
                </View>
            </ScrollView>
            <IngredientAddModal visible={isModalVisible} onRequestClose={closeModal} onRequestValidate={validateModal}/>
            <IngredientsModal visible={isIngredientsModalVisible} onRequestClose={closeIngrediensModal} onRequestValidate={validateIngredientsModal}/>
        </View>
    )
};

const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 20
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        alignItems: "center"
    },
    mealTypeContainer: {
        marginBottom: 25,
        minHeight: 100,
    },
    mealTypeText: {
        marginLeft: 10
    }
});