import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, } from "react";
import { getMealList } from '../redux/actions/actionMealList';

interface HomeScreenProps {
    theme: Record<string, string>,
}
export default function HomeScreen(props: HomeScreenProps): JSX.Element {
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
            <View style={styles(props.theme).container}>
                <View style={styles(props.theme).searchBar}>
                <SearchBar placeholder="Rechercher un plat"
                    onChangeText={function (text: string): void {
                        console.log(text);
                    } }/>
                </View>
                <View style={styles(props.theme).MealSheet}>
                    <View style={styles(props.theme).MealSheetTitle}>
                        <CustomText text="Plat du jour" textType="subtitle" theme={props.theme}/>
                    </View>
                    { mealList.length != 0 ?
                        <TouchableOpacity 
                            onPress={() => {
                                // @ts-ignore
                                return navigation.navigate('MealDetails', {meal: mealList[0]});
                            }}>
                            <MealInformationSheet meal={mealList[0]} theme={props.theme}/>
                        </TouchableOpacity>
                        : ""
                    }
                </View>
                <View style={styles(props.theme).MealSheet}>
                    <View style={styles(props.theme).MealSheetTitle}>
                        <CustomText text="Désert du jour" textType="subtitle" theme={props.theme}/>
                    </View>
                    { mealList.length != 0 ?
                        <TouchableOpacity 
                            onPress={() => {
                                // @ts-ignore
                                return navigation.navigate('MealDetails', {meal: mealList[1]});
                            }}>
                        <MealInformationSheet meal={mealList[1]} theme={props.theme}/>
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
