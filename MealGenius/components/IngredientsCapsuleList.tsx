import { StyleSheet, View } from "react-native";
import IngredientCapsule from "./IngredientCapsule";
import { IIngredient } from "../models/IIngredient";

type IngredientsCapsuleListProps = {
    ingredients: IIngredient[]
}

export default function IngredientsCapsuleList(props: IngredientsCapsuleListProps): JSX.Element {
    return (
        <View style={styles.ingredients}>
            {props.ingredients.map((ingredient, index) => {
                return (
                    <View style={styles.ingredientView}  key={index}>
                        <IngredientCapsule ingredient={ingredient}/>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    ingredients: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    ingredientView: {
        marginHorizontal: 5,
        marginVertical: 2.5
    }
});
