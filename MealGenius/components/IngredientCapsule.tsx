import { StyleSheet, Text, View } from "react-native";

type IngredientCapsuleProps = {
    ingredient: string
}

export default function IngredientCapsule(props: IngredientCapsuleProps): JSX.Element {
    return (
        <View style={styles.ingredient}>
            <Text style={styles.ingredientText}>{props.ingredient}</Text>
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