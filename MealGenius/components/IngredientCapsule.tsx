import { StyleSheet, Text, View } from "react-native";
import { Ingredient } from "../models/Ingredient";

type IngredientCapsuleProps = {
    ingredient: Ingredient,
    theme: Record<string, string>
}

export default function IngredientCapsule(props: IngredientCapsuleProps): JSX.Element {
    return (
        <View style={styles(props.theme).ingredient}>
            <Text style={styles(props.theme).ingredientText}>{props.ingredient.food.name}</Text>
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