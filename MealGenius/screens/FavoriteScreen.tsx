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
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <SearchBar placeholder="Rechercher un plat"
                               onChangeText={function (text: string): void {
                                   console.log(text);
                               } }/>
                </View>
                <View style={styles.MealSheet}>
                    <View style={styles.MealSheetTitle}>
                        <CustomText text="Plat du jour" textType="subtitle"/>
                    </View>
                    <FavoriteCards meals={meals}/>
                </View>
            </View>
        </ScrollView>
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
    MealSheet: {
        marginBottom: 30,
        marginHorizontal: 30
    },
    MealSheetTitle: {
        margin: 10
    },
    searchBar: {
        margin: 20
    }
});
