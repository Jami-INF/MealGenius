import { IFood } from "./IFood";
import { IMeal } from "./IMeal";

export interface IUser {
    /** The user's unique id */
    id: string;
    /** The user's first name */
    firstName: string;
    /** The user's last name */
    lastName: string;
    /** The user's email address */
    email: string;
    /** The user's password */
    password: string;
    /** The user's favorite meals */
    favoriteMeals: IMeal[];
    /** The list of foods in the user's pantry */
    pantry: IFood[];
}