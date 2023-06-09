import { View,StyleSheet, FlatList } from "react-native"
import { Meal } from "../models/Meal"
import MealCard from "./MealCard"
import { ScrollView } from "react-native-gesture-handler"
import FavoriteCard from "./FavoriteCard";

type MealCardsProps = {
    /** The meals to display. */
    meals: Meal[]
}

/** Get a list of cards with the meals' names, images, and durations.
 * @param props The meals to display.
 */
export default function FavoriteCards(props: MealCardsProps): JSX.Element {
    return (
        <FlatList
            data={props.meals}
            renderItem={({ item }) =>
                <View style={styles.card}>
                    <FavoriteCard meal={item}/>
                </View>
            }
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}/>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 3,
        marginVertical: 3
    }
});