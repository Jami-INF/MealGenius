import { Text, StyleSheet } from "react-native/types";

type TextType = "title" | "subtitle" | "paragraph";

type TextProps = {
    text: string,
    textType: TextType
}

export default function CustomText(props: TextProps) {
    return (
        <Text style={getStyle(props.textType)}>{props.text}</Text>
    )
}

function getStyle(textType: TextType): Object {
    switch(textType) {
        case "title":
            return styles.title;
        case "subtitle":
            return styles.subtitle;
        case "paragraph":
            return styles.paragraph;
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    paragraph: {
        fontSize: 16
    }
});
