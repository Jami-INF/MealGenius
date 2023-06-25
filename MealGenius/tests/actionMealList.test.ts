import { Meal } from "../models/Meal";
import { getMealList, setMealList } from "../redux/actions/actionMealList";
import { getMeals } from "../stub/stub";
import { FETCH_MEAL_LIST } from "../redux/constants";

describe('MealList Actions - FETCH_MEAL_LIST', () => {
    // Mock meal data
    const meals: Meal[] = getMeals();
      
    // Expected action
    const expectation = {
      type: FETCH_MEAL_LIST,
      payload: meals,
    };

    it("should create an action with FETCH_MEAL_LIST type for setMealList", () => {
        // Test setMealList action
        expect(setMealList(meals)).toEqual(expectation);
      });
      
      it("should dispatch an action with FETCH_MEAL_LIST type for getMealList", () => {
        // Mock fetch response
        const dispatchMock = jest.fn();
        const fetchMock = jest.fn().mockResolvedValue({
          status: 200,
          json: jest.fn().mockResolvedValue(meals),
        });
      
        global.fetch = fetchMock;
      
        // Test getMealList action
        return getMealList()(dispatchMock).then(() => {
          expect(dispatchMock).toHaveBeenCalledWith(expectation);
        });
    });
})