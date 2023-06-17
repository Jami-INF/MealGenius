import { Text, StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-paper";

type TextType = "title" | "subtitle" | "paragraph" | "card";
type ellipsizeMode = "tail" | "head" | "middle" | "clip";

type TextProps = {
    text: string,
    textType: TextType,
    ellipsizeMode?: ellipsizeMode,
    numberofLines?: number,
    theme: Record<string, string>,
}

/** Display a text with a specific style.
 * @param props The text to display, the type of text (`title` | `subtitle` | `paragraph` | `card`),
 *  the number of lines and the ellipsize mode (`tail` | `head` | `middle` | `clip`).
 */
export default function CustomText(props: TextProps): JSX.Element {
    return (
        <Text style={getStyle(props.textType, props.theme)} 
            numberOfLines={props.numberofLines} 
            ellipsizeMode={props.ellipsizeMode}>
            {props.text}
        </Text>
    )
}

function getStyle(textType: TextType, theme: Record<string, string>): Object {
    switch(textType) {
        case "title":
            return styles(theme).title;
        case "subtitle":
            return styles(theme).subtitle;
        case "paragraph":
            return styles(theme).paragraph;
        case "card":
            return styles(theme).card;
    }
}

const styles = (theme) => StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: theme.textColor
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: theme.textColor
    },
    paragraph: {
        fontSize: 16,
        color: theme.secondaryTextColor
    },
    card: {
        fontSize: 22,
        color: theme.secondaryTextColor
    }
});
