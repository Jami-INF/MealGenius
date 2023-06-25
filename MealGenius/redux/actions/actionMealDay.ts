import { Meal } from "../../models/Meal";
import { FETCH_MEAL_DAY, URL_API } from "../constants";
import { getMealsDayStub } from "../../stub/stub";
import { Mapper } from "../../models/Mapper";

export type MealsDay = {
    mainCourse: Meal,
    dessert: Meal,
}
export const setMealsDay = (mealsDay: MealsDay) => {
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

      mealsDay = {
        mainCourse: Mapper.mealFromJson(mealsDayListJson.mainCourse),
        dessert: Mapper.mealFromJson(mealsDayListJson.dessert)
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