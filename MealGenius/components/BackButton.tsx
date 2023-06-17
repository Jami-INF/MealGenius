import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native"
import { IconButton, Portal } from "react-native-paper"

export default function BackButton(): JSX.Element {
    const navigation = useNavigation();

    return (
        <Portal> 
            <IconButton icon={"arrow-left"}
                    size={30} 
                    iconColor="black"
                    mode="contained-tonal"
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}/>
        </Portal>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 10
    }
})