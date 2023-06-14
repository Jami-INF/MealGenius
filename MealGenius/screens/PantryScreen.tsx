import { View, StyleSheet } from "react-native";
import CustomText from "../components/CustomText";
import { Button, FAB } from "react-native-paper";
import { Meal } from "../models/Meal";
import { getFoods, getMeals } from "../stub/stub";
import MealCards from "../components/MealCards";
import React, { useState } from 'react';
import IngredientAddModal from "../components/IngredientAddModal";
import { Food } from "../models/Food";
import IngredientsModal from "../components/IngredientsModal";

const meals: Meal[] = getMeals();
const foods: Food[] = getFoods();

export default function PantryScreen() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isIngredientsModalVisible, setIngredientsModalVisible] = useState(false);

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
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                
                <Button icon="fridge" 
                    mode="contained-tonal" 
                    onPress={openIngredientsModal}>
                    Mes ingrédients
                </Button>
                <FAB icon="plus"
                    size="small"
                    onPress={openModal}
                />
            </View>
            <View>
                <MealCards meals={meals}/>
            </View>
            <IngredientAddModal visible={isModalVisible} onRequestClose={closeModal} onRequestValidate={validateModal}/>
            <IngredientsModal visible={isIngredientsModalVisible} onRequestClose={closeIngrediensModal} onRequestValidate={validateIngredientsModal}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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
        margin: 20
    }
});