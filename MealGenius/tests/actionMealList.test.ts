import { useSelector } from "react-redux";
import { Meal } from "../models/Meal";
import { getMealList } from "../redux/actions/actionMealList";
import { getMeals } from "../stub/stub";

describe('test actions', () => {

    it('should create an action with FETCH_MEAL_LIST type', () => {
        const meals: Meal[] = getMeals();
        const expectation = {
            type: 'FETCH_MEAL_LIST',
            nounours: meals,
        };
        
        expect(useSelector(getMeals)).toEqual(expectation);
    })

    it('should create an action with ADD_FAVORITE_MEALS type', () => {

        const meal: Meal = getMeals()[0];

        const expectation = {
            type: 'ADD_FAVORITE_MEALS',
            nounours: meal,
        };
        
        expect(getMealList()).toEqual(expectation);
    })

    
})