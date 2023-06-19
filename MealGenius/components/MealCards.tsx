import { View,StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Meal } from "../models/Meal"
import MealCard from "./MealCard"
import { useNavigation } from "@react-navigation/native"

type MealCardsProps = {
    /** The meals to display. */
    meals: Meal[],
    theme: Record<string, string>
}

/** Get a list of cards with the meals' names, images, and durations.
 * @param props The meals to display.
 */
export default function MealCards(props: MealCardsProps): JSX.Element {
    const navigation = useNavigation();
    
    return (
        <FlatList
            data={props.meals}
            renderItem={({ item }) => 
            <View style={styles.card}>
                <TouchableOpacity 
						onPress={() => {
							// @ts-ignore
							return navigation.navigate('PantryDetails', {meal: item});
						}}>
                    <MealCard meal={item} theme={props.theme}/>
                </TouchableOpacity>
            </View>
            }
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}/>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10
    }
});