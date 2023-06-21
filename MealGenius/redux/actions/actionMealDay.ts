import { Meal } from "../../models/Meal";
import { FETCH_MEAL_DAY, URL_API } from "../constants";
import { getMealsDayStub } from "../../stub/stub";
export type MealsDay = {
    mainCourse: Meal,
    dessert: Meal,
}
export const setMealsDay = (mealsDay: MealsDay) => {
    console.log(mealsDay);
    return {
        type: FETCH_MEAL_DAY,
        payload: mealsDay,
    };
}

export const getMealsDay = () => {
    let mealsDay: MealsDay;
    return async dispatch => {
      try {
        const mealsDayPromise = await fetch(URL_API + '/meals/day');
        if (mealsDayPromise.status !== 200) {
            throw new Error('Fetch failed: ' + URL_API + '/meals/day');
        }
        const mealsDayListJson = await mealsDayPromise.json();

        const mealsDay = {
            mainCourse: new Meal(
              mealsDayListJson.mainCourse["id"],
              mealsDayListJson.mainCourse["name"],
              mealsDayListJson.mainCourse["description"],
              mealsDayListJson.mainCourse["image"],
              mealsDayListJson.mainCourse["duration"],
              mealsDayListJson.mainCourse["ingredients"],
              mealsDayListJson.mainCourse["type"],
              mealsDayListJson.mainCourse["steps"],
              mealsDayListJson.mainCourse["complexity"]
            ),
            dessert: new Meal(
              mealsDayListJson.dessert["id"],
              mealsDayListJson.dessert["name"],
              mealsDayListJson.dessert["description"],
              mealsDayListJson.dessert["image"],
              mealsDayListJson.dessert["duration"],
              mealsDayListJson.dessert["ingredients"],
              mealsDayListJson.dessert["type"],
              mealsDayListJson.dessert["steps"],
              mealsDayListJson.dessert["complexity"]
            )
        };
      } catch (error) {
        console.log('Error (cannot build meal list from json) : ', error);
      } finally {
        if (!mealsDay) {
          mealsDay = getMealsDayStub();
        }
        dispatch(setMealsDay(mealsDay));
      }
    }
  }