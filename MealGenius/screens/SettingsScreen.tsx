import {View, Text, StyleSheet} from "react-native";


export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
            </View>
            <Text>settings</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 20
    }
});