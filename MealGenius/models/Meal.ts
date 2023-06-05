import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export class Meal {
    //#region Properties

    /** The id of the meal. */
    private _id: string;
    /** The name of the meal. */
    private _name: string;
    /** The description of the meal. */
    private _description: string;
    /** The image of the meal. */
    private _image : string;
    /** The duration of the meal in minutes. */
    private _duration: number;
    /** The ingredients of the meal. */
    private _ingredients: Ingredient[];
    /** The type of the meal (`aperitif`, `starter course`, `main course`, `dessert`). */
    private _type: string;
    /** The steps of the meal. */
    private _steps: Step[];
    /** The complexity of the meal (`easy`, `medium`, `hard`). */
    private _complexity: string;

    /** Return the meal's id. */
    public get id(): string {
        return this._id;
    }

    /** Return the meal's name. */
    public get name(): string {
        return this._name;
    }

    /** Return the meal's description. */
    public get description(): string {
        return this._description;
    }

    /** Return the meal's image. */
    public get image(): string {
        return this._image;
    }

    /** Return the meal's duration. */
    public get duration(): number {
        return this._duration;
    }

    /** Return the meal's ingredients. */
    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }

    /** Return the meal's type. */
    public get type(): string {
        return this._type;
    }

    /** Return the meal's steps. */
    public get steps(): Step[] {
        return this._steps;
    }

    /** Return the meal's complexity. */
    public get complexity(): string {
        return this._complexity;
    }

    //#endregion

    //#region Methods

    constructor(id: string, name: string, description: string, image : string, duration: number, ingredients: Ingredient[], type: string, steps: Step[], complexity: string) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._image = image;
        this._duration = duration;
        this._ingredients = ingredients;
        this._type = type;
        this._steps = steps;
        this._complexity = complexity;
    }

    //#endregion
}