import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Meal } from "../models/Meal";
import { useDispatch } from "react-redux";
import { removeFavoriteMeal } from "../redux/actions/actionFavoriteMeals";

type DeleteComponentProps = {
    /** The meal to delete. */
    meal: Meal,
}

export default function DeleteComponent(props: DeleteComponentProps): JSX.Element {
    const dispatch = useDispatch();

    function removeFavorite(meal: Meal) {
        // @ts-ignore
        dispatch(removeFavoriteMeal(meal));
    };
    return (
        <TouchableOpacity onPress={() => removeFavorite(props.meal)}>
            <View style={styles.delete} >
                <Ionicons name="trash-outline" size={30} color="white"/>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    delete: {
        width: 80,
        height: 100,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    }
});