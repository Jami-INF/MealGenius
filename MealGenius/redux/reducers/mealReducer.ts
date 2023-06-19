import { Meal } from "../../models/Meal";
import { FETCH_MEAL_LIST } from "../constants";
import mealReducer from './mealReducer';

const initialState = {
    mealList: [],
    favoritesMealList: [],
  }
  
// @ts-ignore
export default mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEAL_LIST:
      // @ts-ignore
      return {...state, mealList: action.payload};
    default:
      return state;
  }
}