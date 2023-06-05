import { StyleSheet, Text, View } from "react-native";
import { Ingredient } from "../models/Ingredient";

type IngredientCapsuleProps = {
    ingredient: Ingredient
}

export default function IngredientCapsule(props: IngredientCapsuleProps): JSX.Element {
    return (
        <View style={styles.ingredient}>
            <Text style={styles.ingredientText}>{props.ingredient.food.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ingredient: {
        borderWidth: 1,
        borderRadius: 20,
        width: null,
        padding: 5
    },
    ingredientText: {
        fontSize: 12,
        marginHorizontal: 5
    }
});