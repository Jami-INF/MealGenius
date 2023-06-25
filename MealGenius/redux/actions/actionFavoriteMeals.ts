import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meal } from '../../models/Meal';
import { ADD_FAVORITE_MEAL, LOAD_FAVORITE_MEALS, REMOVE_FAVORITE_MEAL } from '../constants';
import { Mapper } from '../../models/Mapper';

export const addFavoriteMeal = (meal: Meal) => {
    return async dispatch => {
        try {
            const favorites: Meal[] = await getFavoriteMeals();
            if (favorites.find(favoriteMeal => favoriteMeal.id === meal.id)) {
                return;
            }

            favorites.push(meal);
            await AsyncStorage.setItem("favorites", JSON.stringify(favorites));

            dispatch({
                type: ADD_FAVORITE_MEAL,
                payload: favorites,
            });
        } catch (error) {
        console.log('An error has occurred (addFavorite)', error);
        }
    };
};

export const removeFavoriteMeal = (meal: Meal) => {
    return async dispatch => {
        try {
            const favorites: Meal[] = await getFavoriteMeals();
            const updatedFavorites = favorites.filter(favorite => favorite.id !== meal.id);
            await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));

            dispatch({
                type: REMOVE_FAVORITE_MEAL,
                payload: updatedFavorites,
            });
        } catch (error) {
            console.log('An error has occurred (removeFavorite)', error);
        }
    };
};

export const loadFavoriteMeals = () => {
    return async dispatch => {
        try {
            const favorites: Meal[] = await getFavoriteMeals();
            dispatch({
                type: LOAD_FAVORITE_MEALS,
                payload: favorites,
            });
        } catch (error) {
            console.log('An error has occurred (loadFavorite)', error);
        }
    }
}

async function getFavoriteMeals(): Promise<Meal[]> {
    try {
        const favoritesStorage = await AsyncStorage.getItem('favorites')
        if (!favoritesStorage) {
            return [];
        }

        const jsonFavorites = JSON.parse(favoritesStorage);
        const favoriteMealsList = jsonFavorites.map(elt => Mapper.mealFromJson(elt));
        return favoriteMealsList;
    } catch (e) {
        console.log("An error occurred", e);
    }
}