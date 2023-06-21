import { Meal } from "../../models/Meal";
import { FETCH_MEAL_DAY, FETCH_MEAL_LIST } from "../constants";
import mealReducer from './mealReducer';

const initialState = {
    mealList: [],
    mealsDay: {},
    favoritesMealList: [],
  }
  
// @ts-ignore
export default mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEAL_LIST:
      return {...state, mealList: action.payload};
    case FETCH_MEAL_DAY:
      return {...state, mealsDay: action.payload};

    default:
      return state;
  }
}