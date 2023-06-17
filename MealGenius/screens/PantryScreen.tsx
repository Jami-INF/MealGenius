import { View, StyleSheet } from "react-native";
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

interface PantryScreenProps {
    theme: Record<string, string>,
}
export default function PantryScreen(props: PantryScreenProps): JSX.Element {
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
        <View style={styles(props.theme).container}>
            <View style={styles(props.theme).buttonContainer}>
                
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
                <MealCards meals={meals} theme={props.theme}/>
            </View>
            <IngredientAddModal visible={isModalVisible} onRequestClose={closeModal} onRequestValidate={validateModal} theme={props.theme}/>
            <IngredientsModal visible={isIngredientsModalVisible} onRequestClose={closeIngrediensModal} onRequestValidate={validateIngredientsModal} theme={props.theme}/>
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
        margin: 20
    }
});