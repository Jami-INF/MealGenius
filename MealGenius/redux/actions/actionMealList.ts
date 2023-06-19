import { Meal } from "../../models/Meal";
import { getMeals } from "../../stub/stub";
import { FETCH_MEAL_LIST, URL_API } from "../constants";

export const setMealList = (mealList: Meal[]) => {
  return {
    type: FETCH_MEAL_LIST,
    payload: mealList,
  };
}

export const getMealList = () => {
    let mealList: Meal[] = [];
    return async dispatch => {
      try {
        const mealPromise = await fetch(URL_API + '/meals');
        if (mealPromise.status !== 200) {
            throw new Error('Fetch failed: ' + URL_API + '/meals');
        }
        const mealListJson = await mealPromise.json();

        mealList = mealListJson.map(elt => new Meal(
            elt["id"],
            elt["name"],
            elt["description"],
            elt["image"],
            elt["duration"],
            elt["ingredients"],
            elt["type"],
            elt["steps"],
            elt["complexity"]
          )
        );
      } catch (error) {
        console.log('Error (cannot build meal list from json) : ', error);
      } finally {
        if (mealList.length == 0) {
          mealList = getMeals();
        }
        dispatch(setMealList(mealList));
      }
    }
  }