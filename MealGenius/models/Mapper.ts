import { Food } from "./Food";
import { Ingredient } from "./Ingredient";
import { Meal } from "./Meal";
import { Step } from "./Step";

export class Mapper {
    public static mealFromJson(json): Meal {
        const ingredients = json._ingredients.map(ingredient => new Ingredient(
            ingredient._id,
            new Food(
                ingredient._food._id,
                ingredient._food._name
            ),
            ingredient._unit,
            ingredient._quantity,
        ));
        const steps = json._steps.map(step => new Step(
            step._id,
            step._description,
            step._number,
            step._duration
        ));

        return new Meal(
            json._id,
            json._name,
            json._description,
            json._image,
            json._duration,
            ingredients,
            json._type,
            steps,
            json._complexity
        );
    }
}