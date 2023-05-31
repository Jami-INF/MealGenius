import { IFood } from "./IFood";

export interface IIngredient {
    /** The id of the ingredient. */
    id: string;
    /** The ingredient-related food*/
    food: IFood;
    /** The unit of measurement for the ingredient. */
    unit: string;
    /** The quantity of the ingredient. */
    quantity: number;
}
