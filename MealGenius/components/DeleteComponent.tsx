import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Meal } from "../models/Meal";

type DeleteComponentProps = {
    /** The meal to delete. */
    meal: Meal,
    onDelete: (meal: Meal) => void
}

export default function DeleteComponent(props: DeleteComponentProps): JSX.Element {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.meal)}>
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