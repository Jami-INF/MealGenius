import { Button, IconButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import CustomText from '../components/CustomText';
import { Meal } from "../models/Meal";
import { getFoods, getMeals } from "../stub/stub";
import MealCards from "../components/MealCards";
import React, { useState } from 'react';
import IngredientAddModal from "../components/IngredientAddModal";
import { Food } from "../models/Food";
import IngredientsModal from "../components/IngredientsModal";
import { ScrollView } from "react-native-gesture-handler";

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
                
                <IconButton icon="plus"
                            size={20}
                            mode="contained-tonal" 
                            onPress={openModal}/>
            </View>
            <ScrollView>
                <View style={styles(props.theme).mealTypeContainer}>
                    <View style={styles(props.theme).mealTypeText}>
                        <CustomText text="Mes entrées" textType="subtitle" theme={props.theme}/>
                    </View>
                    <View>
                        <MealCards meals={meals.filter((meal: Meal) => meal.type === "starter")}  theme={props.theme}/>
                    </View>
                </View>
                <View style={styles(props.theme).mealTypeContainer}>
                    <View style={styles(props.theme).mealTypeText}>
                        <CustomText text="Mes plats" textType="subtitle" theme={props.theme}/>
                    </View>
                    <View>
                        <MealCards meals={meals.filter((meal: Meal) => meal.type === "main course")}  theme={props.theme}/>
                    </View>
                </View>
                <View style={styles(props.theme).mealTypeContainer}>
                    <View style={styles(props.theme).mealTypeText}>
                        <CustomText text="Mes desserts" textType="subtitle" theme={props.theme}/>
                    </View>
                    <View>
                        <MealCards meals={meals.filter((meal: Meal) => meal.type === "dessert")} theme={props.theme}/>
                    </View>
                </View>
            </ScrollView>
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