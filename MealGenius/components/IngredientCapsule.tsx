import { StyleSheet, Text, View } from "react-native";
import { Ingredient } from "../models/Ingredient";
import { useContext } from "react";
import { DarkThemeContext } from "../App";

type IngredientCapsuleProps = {
    ingredient: Ingredient,
}

export default function IngredientCapsule(props: IngredientCapsuleProps): JSX.Element {
    const { theme } = useContext(DarkThemeContext);

    return (
        <View style={styles(theme).ingredient}>
            <Text style={styles(theme).ingredientText}>{props.ingredient.food.name}</Text>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    ingredient: {
        borderWidth: 1,
        borderRadius: 20,
        width: null,
        padding: 5
    },
    ingredientText: {
        fontSize: 12,
        marginHorizontal: 5,
        color: theme.secondaryTextColor
    }
});