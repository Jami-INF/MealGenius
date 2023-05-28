import {View, StyleSheet, ScrollView} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
import { IMeal } from "../models/IMeal";

const meals: IMeal[] = [
    {
        id: "1",
        name: "Paella",
        description: "Ce plat est un plat espagnol à base de riz, de poulet, de crevettes, de moules, de petits pois, de poivrons et d'oignons.",
        ingredients: [
            "Riz",
            "Poulet",
            "Crevettes",
            "Moules",
            "Petits pois",
            "Poivrons",
            "Oignons"
        ],
        duration: 60,
        image: require("../assets/meals/paella.jpeg")
    }
];

export default function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.centered}>
                    <CustomText text="Meal Genius" textType="title"/>
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
                    <MealInformationSheet meal={meals[0]}/>
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
    MealSheet: {
        margin: 30
    },
    MealSheetTitle: {
        margin: 10
    }
  });