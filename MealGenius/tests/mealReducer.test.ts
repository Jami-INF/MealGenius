import { Meal } from "../models/Meal";
import { FETCH_MEAL_LIST } from "../redux/constants";
import mealReducer from "../redux/reducers/mealReducer";
import { getMeals } from "../stub/stub";

describe("Meal Reducer", () => {
    const initialState = {
        mealList: [],
        mealsDay: {},
        favoritesMealList: [],
    }

    it("should return the initial state", () => {
        var a = mealReducer(undefined, {});
        console.log(a);
        console.log(initialState);
        expect(a).toEqual(initialState);
    })

    describe("Meal Reducer - FETCH_MEAL_LIST", () => {
        const initialState = {
            mealList: [],
            mealsDay: {
                mainCourse: {},
                dessert: {},
            }
        };

        // Mock meal data
        const meals: Meal[] = getMeals();
        
        // Expected action
        const expectation = {
            type: FETCH_MEAL_LIST,
            payload: meals,
        };

        it("should handle FETCH_MEAL_LIST", () => {    
            expect(
                mealReducer(initialState)
            ).toEqual({
                mealList: meals,
                mealsDay: {
                    mainCourse: {},
                    dessert: {}
                },
            });
        }
    )})

    describe("Meal Reducer - FETCH_MEAL_DAY", () => {
        const initialState = {
            mealList: [],
            mealsDay: {
                mainCourse: {},
                dessert: {},
            }
        };

        // Mock mealDay data
        
        // Expected action
        const expectation = {
            mealList: [],
                mealsDay: {
                    mainCourse: getMeals()[4],
                    dessert: getMeals()[2]
                },
        };

        it("should handle FETCH_MEAL_LIST", () => {    
            var a = mealReducer(initialState);
            console.log(a,);
            expect(a).toEqual(expectation);
        }
    )})
})
