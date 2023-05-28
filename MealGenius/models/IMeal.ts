import { IImage } from "./IImage";

export interface IMeal {
    /** The id of the meal. */
    id: string;
    /** The name of the meal. */
    name: string;
    /** The description of the meal. */
    description: string;
    /** The image of the meal. */
    image : IImage;
    /** The duration of the meal in minutes. */
    duration: number;
    /** The ingredients of the meal. */
    ingredients: string[];
}