import { View, StyleSheet } from "react-native";
import CustomText from "../components/CustomText";
import { Button, FAB } from "react-native-paper";
import { IMeal } from "../models/IMeal";
import { getMeals } from "../stub/stub";
import MealCards from "../components/MealCards";
import React, { useState } from 'react';
import IngredientAddModal from "../components/IngredientAddModal";

const meals: IMeal[] = getMeals();

export default function PantryScreen() {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const validateModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <CustomText text="Garde-manger" textType="title"/>
            </View>
            <View style={styles.buttonContainer}>
                
                <Button icon="fridge" 
                    mode="contained-tonal" 
                    onPress={openModal}>
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
            <IngredientAddModal meals={meals} visible={isModalVisible} onRequestClose={closeModal} onRequestValidate={validateModal}/>
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