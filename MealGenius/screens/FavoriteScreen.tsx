import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
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
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 20
    },
    FavoriteItem: {
        marginBottom: 30,
        marginHorizontal: 10
    },
    MealSheetTitle: {
        margin: 10
    },
    searchBar: {
        margin: 20
    }
});
