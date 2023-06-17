import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import CustomText from "../components/CustomText";
import MealInformationSheet from "../components/MealInfomationSheet";
import { Meal } from "../models/Meal";
import { getMeals } from "../stub/stub"
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";

const meals: Meal[] = getMeals();

interface HomeScreenProps {
    theme: Record<string, string>,
}
export default function HomeScreen(props: HomeScreenProps): JSX.Element {
    const navigation = useNavigation();

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
                    <TouchableOpacity 
						onPress={() => {
							// @ts-ignore
							return navigation.navigate('MealDetails', {meal: meals[0]});
						}}>
                        <MealInformationSheet meal={meals[0]} theme={props.theme}/>
                    </TouchableOpacity>
                </View>
                <View style={styles(props.theme).MealSheet}>
                    <View style={styles(props.theme).MealSheetTitle}>
                        <CustomText text="Désert du jour" textType="subtitle" theme={props.theme}/>
                    </View>
                    <TouchableOpacity 
						onPress={() => {
							// @ts-ignore
							return navigation.navigate('MealDetails', {meal: meals[1]});
						}}>
                    <MealInformationSheet meal={meals[1]} theme={props.theme}/>
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
