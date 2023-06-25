import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, } from "react";
import { DarkThemeContext } from "../App";
import { getMealsDay } from "../redux/actions/actionMealDay";

export default function HomeScreen(): JSX.Element {
    const navigation = useNavigation();
    // @ts-ignore
    const mealsDay = useSelector(state => state.mealReducer.mealsDay);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadMeals = async () => {
            // @ts-ignore
            await dispatch(getMealsDay());
        }
        loadMeals();
    }, [dispatch]);
    
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
                    { mealsDay.mainCourse ?
                        <TouchableOpacity 
                            onPress={() => {
                                // @ts-ignore
                                return navigation.navigate('MealDetails', {meal: mealsDay.mainCourse});
                            }}>
                            <MealInformationSheet meal={mealsDay.mainCourse}/>
                        </TouchableOpacity>
                        : ""
                    }
                </View>
                <View style={styles(theme).MealSheet}>
                    <View style={styles(theme).MealSheetTitle}>
                        <CustomText text="Désert du jour" textType="subtitle"/>
                    </View>
                    { mealsDay.dessert ?
                        <TouchableOpacity 
                            onPress={() => {
                                // @ts-ignore
                                return navigation.navigate('MealDetails', {meal: mealsDay.dessert});
                            }}>
                        <MealInformationSheet meal={mealsDay.dessert}/>
                        </TouchableOpacity>
                        : ""
                    }
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
