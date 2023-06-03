import {View, StyleSheet, ScrollView} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
import { IMeal } from "../models/IMeal";
import { getMeals } from "../stub/stub"
import SearchBar from "../components/SearchBar";

const meals: IMeal[] = getMeals();

export default function HomeScreen() {
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
                    <MealInformationSheet meal={meals[0]}/>
                </View>
                <View style={styles.MealSheet}>
                    <View style={styles.MealSheetTitle}>
                        <CustomText text="Désert du jour" textType="subtitle"/>
                    </View>
                    <MealInformationSheet meal={meals[1]}/>
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
