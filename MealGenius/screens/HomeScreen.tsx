import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, } from "react";
import { getMealList } from '../redux/actions/actionMealList';

export default function HomeScreen() {
    const navigation = useNavigation();
    // @ts-ignore
    const mealList = useSelector(state => state.mealReducer.mealList);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadMeals = async () => {
            // @ts-ignore
            await dispatch(getMealList());
        }
        loadMeals();
    }, [dispatch]);
    
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
                    { mealList.length != 0 ?
                        <TouchableOpacity 
                            onPress={() => {
                                // @ts-ignore
                                return navigation.navigate('MealDetails', {meal: mealList[0]});
                            }}>
                            <MealInformationSheet meal={mealList[0]}/>
                        </TouchableOpacity>
                        : ""
                    }
                </View>
                <View style={styles.MealSheet}>
                    <View style={styles.MealSheetTitle}>
                        <CustomText text="Désert du jour" textType="subtitle"/>
                    </View>
                    { mealList.length != 0 ?
                        <TouchableOpacity 
                            onPress={() => {
                                // @ts-ignore
                                return navigation.navigate('MealDetails', {meal: mealList[1]});
                            }}>
                        <MealInformationSheet meal={mealList[1]}/>
                        </TouchableOpacity>
                        : ""
                    }
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
