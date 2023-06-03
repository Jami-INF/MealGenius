import { Food } from "./Food";

export class Ingredient {
    
    //#region Properties

    /** The id of the ingredient. */
    private _id: string;
    /** The ingredient-related food*/
    private _food: Food;
    /** The unit of measurement for the ingredient. */
    private _unit: string;
    /** The quantity of the ingredient. */
    private _quantity: number;

    //#endregion

    //#region Methods

    constructor(id: string, food: Food, unit: string, quantity: number) {
        this._id = id;
        this._food = food;
        this._unit = unit;
        this._quantity = quantity;
    }

    /** Return the ingredient's id. */
    public get id(): string {
        return this._id;
    }

    /** Return the ingredient's food. */
    public get food(): Food {
        return this._food;
    }

    /** Return the ingredient's unit. */
    public get unit(): string {
        return this._unit;
    }

    /** Return the ingredient's quantity. */
    public get quantity(): number {
        return this._quantity;
    }

    //#endregion
}