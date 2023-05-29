import {View, StyleSheet} from "react-native";
import CustomText from "../components/CustomText";
import { Button, FAB } from "react-native-paper";
import MealCard from "../components/MealCard";
import { IMeal } from "../models/IMeal";
import { getMeals } from "../stub/stub";

const meals: IMeal[] = getMeals();

export default function PantryScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <CustomText text="Garde-manger" textType="title"/>
            </View>
            <View style={styles.buttonContainer}>
                
                <Button icon="fridge" 
                    mode="contained-tonal" 
                    onPress={() => console.log('Pressed')}>
                    Mes ingrédients
                </Button>
                <FAB icon="plus"
                    size="small"
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View>
                <MealCard meal={meals[0]}/>
            </View>
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