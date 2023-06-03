import { View,StyleSheet, FlatList } from "react-native"
import { IMeal } from "../models/Meal"
import MealCard from "./MealCard"
import { ScrollView } from "react-native-gesture-handler"

type MealCardsProps = {
    /** The meals to display. */
    meals: IMeal[]
}

/** Get a list of cards with the meals' names, images, and durations.
 * @param props The meals to display.
 */
export default function MealCards(props: MealCardsProps): JSX.Element {
    return (
        <FlatList
            data={props.meals}
            renderItem={({ item }) => 
            <View style={styles.card}>
                <MealCard meal={item}/>
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