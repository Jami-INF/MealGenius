import { getMeals } from '../stub/stub';
import mealReducer from "../redux/reducers/mealReducer";

// Mock values used in tests
const initialState = {
    mealList: getMeals(),
    mealsDay: {
        mainCourse: {},
        dessert: {},
    }
};

// Reducer for tests => Just call the "true" reducer with our mocked data as initial state
// @ts-ignore
export default testReducer = (state = initialState, action) => {
    return mealReducer(initialState, action);
}