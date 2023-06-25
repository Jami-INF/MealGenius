import {View, StyleSheet, FlatList, TouchableOpacity} from "react-native"
import { Meal } from "../models/Meal"
import FavoriteCard from "./FavoriteCard";
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadFavoriteMeals, removeFavoriteMeal } from "../redux/actions/actionFavoriteMeals";

export default function FavoriteCards(): JSX.Element {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // @ts-ignore
    const favoriteMeals = useSelector(state => state.mealReducer.favoriteMealList);

    useEffect(() => {
        const loadfavoriteMeals = async () => {
            // @ts-ignore
            await dispatch(loadFavoriteMeals());
        }
        loadfavoriteMeals();
    }, [dispatch]);

    return (
        <FlatList
            style={styles.list}
            data={favoriteMeals}
            renderItem={({ item }) =>
                <View style={styles.card}>
                    <TouchableOpacity
                        onPress={() => {
                            // @ts-ignore
                            return navigation.navigate('MealDetails', {meal: item});
                        }}>
                        <FavoriteCard meal={item}/>
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
        marginVertical: 3,
    },
    list: {
        height: "100%",
        width: "100%"
    }
});