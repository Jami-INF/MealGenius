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

    /** Return the user's id. */
    public get id(): string {
        return this._id;
    }

    /** Return the user's first name. */
    public get firstName(): string {
        return this._firstName;
    }

    /** Set the user's first name.
     * @param firstName The new first name.
     */
    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    /** Return the user's last name. */
    public get lastName(): string {
        return this._lastName;
    }

    /** Set the user's last name.
     * @param lastName The new last name.
     */
    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

    /** Return the user's email address. */
    public get email(): string {
        return this._email;
    }

    /** Set the user's email address.
     * @param email The new email address.
     */
    public set email(email: string) {
        this._email = email;
    }

    /** Return the user's password. */
    public get password(): string {
        return this._password;
    }

    /** Verify if the two passwords match and set the user's password if they do.
     * @param password The new password.
     * @param confirmPassword The new password confirmation.
     * @returns True if the password was successfully changed, false otherwise.
     */
    public setPassword(password: string, confirmPassword: string): boolean {
        if (password === confirmPassword) {
            this._password = password;
            return true;
        }
        return false;
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

    /** Add a meal to the user's favorite meals.
     * @param meal The meal to add.
     * @returns `true` if the meal was successfully added, `false` otherwise.
     */
    public addFavoriteMeal(meal: Meal): boolean {
        if (this._favoriteMeals.indexOf(meal) === -1) {
            this._favoriteMeals.push(meal);
            return true;
        }
        return false;
    }

    /** Remove a meal from the user's favorite meals.
     * @param meal The meal to remove.
     * @returns `true` if the meal was successfully removed, `false` otherwise.
     */
    public removeFavoriteMeal(meal: Meal): boolean {
        const index = this._favoriteMeals.indexOf(meal);
        if (index !== -1) {
            this._favoriteMeals.splice(index, 1);
            return true;
        }
        return false;
    }

    /** Add a food to the user's pantry.
     * @param food The food to add.
     * @returns `true` if the food was successfully added, `false` otherwise.
     */
    public addFoodToPantry(food: Food): boolean {
        if (this._pantry.indexOf(food) === -1) {
            this._pantry.push(food);
            return true;
        }
        return false;
    }

    /** Remove a food from the user's pantry.
     * @param food The food to remove.
     * @returns `true` if the food was successfully removed, `false` otherwise.
     */
    public removeFoodFromPantry(food: Food): boolean {
        const index = this._pantry.indexOf(food);
        if (index !== -1) {
            this._pantry.splice(index, 1);
            return true;
        }
        return false;
    }

    //#endregion
}