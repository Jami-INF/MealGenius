import {Image, ImageSourcePropType} from "react-native";

type ImageType = "icon" | "meal";
type ImageExtension = "png" | "jpg" | "jpeg";

type ImageProps = {
    imageType: ImageType,
    imageName: string,
    imageExtension: ImageExtension
}

/** Display an image with its type, name and extension.
 * @returns Return the image.
 * @param props The type, name and extension of the image.
 * @example
 * <CustomImage imageType="icon" imageName="home" imageExtension="png"/>
 * <CustomImage imageType="meal" imageName="hamburger" imageExtension="jpg"/>
 * @param props
 */
export default function CustomImage(props: ImageProps): JSX.Element {
    const imagePath: ImageSourcePropType = getPath(props.imageType, props.imageName, props.imageExtension);
    return (
        <Image source={imagePath}/>
    )
}

/** Get the path of an image with its type, name and extension.
 * @param imageType The type of the image (`icon` or `meal`).
 * @param imageName The name of the image.
 * @param imageExtension The extension of the image (`png`, `jpg` or `jpeg`).
 * @returns Return the path of the image.
 */
function getPath(imageType: ImageType, imageName: string, imageExtension: ImageExtension): ImageSourcePropType  {
    let folder: string = imageType === "icon" ? "icons" : "meals";
    let imagePath: string = `../assets/${folder}/${imageName}${imageExtension}`;
    return require(imagePath);
}