import { Meal } from "../models/Meal";
import { MealsDay, getMealsDay, setMealsDay } from "../redux/actions/actionMealDay";
import { FETCH_MEAL_DAY } from "../redux/constants";
import { getMeals } from "../stub/stub";

describe('MealList Actions - FETCH_MEAL_DAY', () => {

    // Mock mealDay data
    const meal: MealsDay = {
        mainCourse: getMeals()[1],
        dessert: getMeals()[3],
    }

    // Expected action
    const expectation = {
    type: FETCH_MEAL_DAY,
    payload: meal,
    };

    it("should create an action with FETCH_MEAL_DAY type for setMealList", () => {
        // Test setMealList action
        expect(setMealsDay(meal)).toEqual(expectation);
    });
    
    it("should dispatch an action with FETCH_MEAL_DAY type for getMealList", () => {
        // Mock fetch response
        const dispatchMock = jest.fn();
        const fetchMock = jest.fn().mockResolvedValue({
        status: 200,
        json: jest.fn().mockResolvedValue(meal),
        });
    
        global.fetch = fetchMock;
    
        // Test getMealList action
        return getMealsDay()(dispatchMock).then(() => {
        expect(dispatchMock).toHaveBeenCalledWith(expectation);
        });
    });
});