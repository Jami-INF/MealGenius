import {View, StyleSheet} from "react-native";
import {Meal} from "../models/Meal";
import {getMeals} from "../stub/stub";
import FavoriteCards from "../components/FavoriteCards";

const meals: Meal[] = getMeals();

export default function FavoriteScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.FavoriteItem}>
                <FavoriteCards meals={meals}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    FavoriteItem: {
        marginBottom: 30,
        marginHorizontal: 10
    }
});
