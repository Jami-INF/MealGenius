import { View,StyleSheet, FlatList } from "react-native"
import { Meal } from "../models/Meal"
import FavoriteCard from "./FavoriteCard";

type FavoriteCards = {
    /** The meals to display. */
    meals: Meal[]
}

export default function FavoriteCards(props: FavoriteCards): JSX.Element {
    return (
        <FlatList
            style={styles.list}
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
    },
    list: {
        height: "100%",
        width: "100%"
    }
});