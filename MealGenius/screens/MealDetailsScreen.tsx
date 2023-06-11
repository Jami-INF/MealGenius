import { Image, StyleSheet, Text, View } from "react-native";
import { Meal } from "../models/Meal";
import { ScrollView } from "react-native-gesture-handler";

// @ts-ignore
export default function MealDetailsScreen({route}) {
    const meal : Meal = route.params.meal;

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri: meal.image}}/>
            <View style={styles.body}>    
                <Text>{meal.name}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        height: 200,
        width: '100%',
        backgroundColor: 'grey',
        resizeMode: "center",
    },
    body: {
        marginTop: -30,
        backgroundColor: 'white',
        width: '95%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
    },
}); 