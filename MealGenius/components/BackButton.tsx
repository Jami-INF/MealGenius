import { Ionicons } from "@expo/vector-icons"
import { View, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { IconButton } from "react-native-paper"

type BackButtonProps = {
    /** The function to call when the back button is pressed. */
    onPress: () => void
}

export default function BackButton(props: BackButtonProps): JSX.Element {
    return (
        <IconButton icon={"arrow-left"}
                    size={30} 
                    iconColor="black"
                    containerColor="white"
                    onPress={props.onPress}
                    style={styles.backButton}/>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        margin: 10
    }
})