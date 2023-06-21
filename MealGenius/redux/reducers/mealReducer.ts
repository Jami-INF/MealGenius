import { ADD_FAVORITE_MEALS, DELETE_MEAL, FETCH_MEAL_LIST } from "../constants";

const initialState = {
    mealList: [],
    favoritesMealList: [],
  }
  
  // @ts-ignore
  export default mealReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITE_MEALS:
        // @ts-ignore
        state.favoriteNounours.push(action.nounours)
        return {...state};
      case FETCH_MEAL_LIST:
        // @ts-ignore
        return {...state, nounours: action.payload};
      case DELETE_MEAL:
        // @ts-ignore
        return {...state, nounours: [...state.nounours.filter((item) => item.name != action.payload.name)]}  
      default:
        return state;
    }
  }