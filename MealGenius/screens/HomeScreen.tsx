import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
import { Meal } from "../models/Meal";
import { getMeals } from "../stub/stub"
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { DarkThemeContext } from "../App";

const meals: Meal[] = getMeals();

export default function HomeScreen(): JSX.Element {
    const navigation = useNavigation();
    const { theme } = useContext(DarkThemeContext);
    return (
        <ScrollView>
            <View style={styles(theme).container}>
                <View style={styles(theme).searchBar}>
                <SearchBar placeholder="Rechercher un plat"
                    onChangeText={function (text: string): void {
                        console.log(text);
                    } }/>
                </View>
                <View style={styles(theme).MealSheet}>
                    <View style={styles(theme).MealSheetTitle}>
                        <CustomText text="Plat du jour" textType="subtitle"/>
                    </View>
                    <TouchableOpacity 
						onPress={() => {
							// @ts-ignore
							return navigation.navigate('MealDetails', {meal: meals[0]});
						}}>
                        <MealInformationSheet meal={meals[0]}/>
                    </TouchableOpacity>
                </View>
                <View style={styles(theme).MealSheet}>
                    <View style={styles(theme).MealSheetTitle}>
                        <CustomText text="Désert du jour" textType="subtitle"/>
                    </View>
                    <TouchableOpacity 
						onPress={() => {
							// @ts-ignore
							return navigation.navigate('MealDetails', {meal: meals[1]});
						}}>
                    <MealInformationSheet meal={meals[1]}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
  };
  
  const styles = (theme) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
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
