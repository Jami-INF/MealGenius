import { ImageExtension, ImageType } from "./types/ImageTypes";

export interface IImage {
    /** The type of image `icon` or `meal`. */
    type: ImageType;
    /** The name of the image. */
    name: string;
    /** The extension of the image `png`, `jpg`, or `jpeg`. */
    extension: ImageExtension;
}