import {View, StyleSheet, ScrollView} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";


export default function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.centered}>
                    <CustomText text="Meal Genius" textType="title"/>
                </View>
                <View style={styles.MealSheet}>
                    <MealInformationSheet/>
                </View>
                <View style={styles.MealSheet}>
                    <MealInformationSheet/>
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
    }
  });