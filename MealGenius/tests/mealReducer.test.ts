import { Meal } from "../models/Meal";
import { FETCH_MEAL_LIST } from "../redux/constants";
import mealReducer from "../redux/reducers/mealReducer";
import { getMeals } from "../stub/stub";

describe("Meal Reducer", () => {

    const initialState = {
        mealList: [],
        mealsDay: {
            mainCourse: {},
            dessert: {},
        }
    };

    it.skip("should return the initial state", () => {

        expect(mealReducer(undefined, {})).toEqual(initialState);
    })

    describe("Meal Reducer - FETCH_MEAL_LIST", () => {
        // Mock meal data
        const meals: Meal[] = getMeals();
        
        // Expected action
        const expectation = {
            type: FETCH_MEAL_LIST,
            payload: meals,
        };

        it("should handle FETCH_MEAL_LIST", () => {    
            expect(
                mealReducer(initialState, expectation)
            ).toEqual({
                mealList: meals,
                mealsDay: {
                    mainCourse: {},
                    dessert: {}
                },
            });
        }
    )})
})
