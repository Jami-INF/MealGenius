import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meal } from '../../models/Meal';
import { ADD_FAVORITE_MEAL, LOAD_FAVORITE_MEALS, REMOVE_FAVORITE_MEAL } from '../constants';
import { Ingredient } from '../../models/Ingredient';
import { Food } from '../../models/Food';
import { Step } from '../../models/Step';

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
        const favoriteMealsList = jsonFavorites.map(elt => new Meal(
            elt._id,
            elt._name,
            elt._description,
            elt._image,
            elt._duration,
            elt._ingredients.map(ingredient => new Ingredient(
                    ingredient._id,
                    new Food(
                        ingredient._food._id,
                        ingredient._food._name
                    ),
                    ingredient._unit,
                    ingredient._quantity,
                )
            ),
            elt._type,
            elt._steps.map(step => new Step(
                    step._id,
                    step._description,
                    step._number,
                    step._duration
                )
            ),
            elt._complexity
            )
        );
        return favoriteMealsList;
    } catch (e) {
        console.log("An error occurred", e);
    }
}