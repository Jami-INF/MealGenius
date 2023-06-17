import {View, StyleSheet, FlatList, TouchableOpacity} from "react-native"
import { Meal } from "../models/Meal"
import FavoriteCard from "./FavoriteCard";
import { useNavigation } from "@react-navigation/native"

type FavoriteCards = {
    /** The meals to display. */
    meals: Meal[],
    theme: Record<string, string>,
    removeFavorite: (meal: Meal) => void
}

export default function FavoriteCards(props: FavoriteCardProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <FlatList
            style={styles.list}
            data={props.meals}
            renderItem={({ item }) =>
                <View style={styles.card}>
                    <TouchableOpacity
                        onPress={() => {
                            // @ts-ignore
                            return navigation.navigate('MealDetails', {meal: item});
                        }}>
                        <FavoriteCard meal={item} onDelete={() => props.removeFavorite(item) }  theme={props.theme} />
                    </TouchableOpacity>


                </View>
            }
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            keyExtractor={(item) => item.id}
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