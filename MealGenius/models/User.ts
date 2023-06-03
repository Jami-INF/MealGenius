import { Food } from "./Food";
import { Meal } from "./Meal";

export class User {

    //#region Properties

    /** The user's unique id */
    private _id: string;
    /** The user's first name */
    private _firstName: string;
    /** The user's last name */
    private _lastName: string;
    /** The user's email address */
    private _email: string;
    /** The user's password */
    private _password: string;
    /** The user's favorite meals */
    private _favoriteMeals: Meal[];
    /** The list of foods in the user's pantry */
    private _pantry: Food[];

    //#endregion

    //#region Methods

    constructor(id: string, firstName: string, lastName: string, email: string, password: string, favoriteMeals: Meal[], pantry: Food[]) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._favoriteMeals = favoriteMeals;
        this._pantry = pantry;
    }

    /** Return the user's id. */
    public get id(): string {
        return this._id;
    }

    /** Return the user's first name. */
    public get firstName(): string {
        return this._firstName;
    }

    /** Return the user's last name. */
    public get lastName(): string {
        return this._lastName;
    }

    /** Return the user's email address. */
    public get email(): string {
        return this._email;
    }

    /** Return the user's password. */
    public get password(): string {
        return this._password;
    }

    /** Return the user's favorite meals. */
    public get favoriteMeals(): Meal[] {
        return this._favoriteMeals;
    }

    /** Return the list of foods in the user's pantry. */
    public get pantry(): Food[] {
        return this._pantry;
    }

    //#endregion
}