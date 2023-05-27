import { Image } from "react-native";

type ImageType = "icon" | "meal";
type ImageExtension = "png" | "jpg" | "jpeg";

type ImageProps = {
    imageType: ImageType,
    imageName: string,
    imageExtension: ImageExtension
}

/** Display an image with its type, name and extension.
 * @param imageType The type of the image (`icon` or `meal`).
 * @param imageName The name of the image.
 * @param imageExtension The extension of the image (`png`, `jpg` or `jpeg`).
 * @returns Return the image.
 * @example
 * <CustomImage imageType="icon" imageName="home" imageExtension="png"/>
 * <CustomImage imageType="meal" imageName="hamburger" imageExtension="jpg"/>
 */
export default function CustomImage(props: ImageProps) {
    return (
        <Image source={require(getPath(props.imageType, props.imageName, props.imageExtension))}/>
    )
}

/** Get the path of an image with its type, name and extension.
 * @param imageType The type of the image (`icon` or `meal`).
 * @param imageName The name of the image.
 * @param imageExtension The extension of the image (`png`, `jpg` or `jpeg`).
 * @returns Return the path of the image.
 */
function getPath(imageType: ImageType, imageName: string, imageExtension: ImageExtension): string {
    let folder: string = imageType === "icon" ? "icons" : "meals";
    return `../assets/${folder}/${imageName}${imageExtension}`;
}