import { Meal } from "../../models/Meal";
import { ADD_FAVORITE_MEAL, FETCH_MEAL_DAY, FETCH_MEAL_LIST, LOAD_FAVORITE_MEALS, REMOVE_FAVORITE_MEAL } from "../constants";
import mealReducer from './mealReducer';

const initialState = {
    mealList: [],
    mealsDay: {},
    favoriteMealList: [],
  }
  
// @ts-ignore
export default mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEAL_LIST:
      return {...state, mealList: action.payload};
    case FETCH_MEAL_DAY:
      return {...state, mealsDay: action.payload};
    case ADD_FAVORITE_MEAL:
      return {...state, favoriteMealList: action.payload};
    case REMOVE_FAVORITE_MEAL:
      return {...state, favoriteMealList: action.payload};
    case LOAD_FAVORITE_MEALS:
      return {...state, favoriteMealList: action.payload};
    default:
      return state;
  }
}