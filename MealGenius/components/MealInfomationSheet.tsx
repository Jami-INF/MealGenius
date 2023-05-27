import { View, Text, StyleSheet  } from "react-native";

export default function MealInformationSheet(){
    return (
        <View style={styles.container}>
            <View>
                <Text>Nom du plat</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row"
    }
});