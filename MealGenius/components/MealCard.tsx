import { Meal } from "../models/Meal"
import { View, StyleSheet, Image } from "react-native"
import CustomText from "./CustomText"
import { Ionicons } from "@expo/vector-icons"
import Time from "./Time"

type MealCardProps = {
    meal: Meal
}

/** Get a card with the meal's name, image, and duration
 * @param props The meal to display
 */
export default function MealCard(props: MealCardProps): JSX.Element {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require(`../assets/meals/paella.jpeg`)}/>
            <View style={styles.header}>
                <View style={styles.title}>
                    <CustomText text={props.meal.name} 
                        textType="card"
                        ellipsizeMode="tail"
                        numebrofLines={1}/>
                </View>
                <View style={styles.clock}>
                    <Ionicons name="time-outline" size={30}/>
                    <Time time={props.meal.duration} fontSize={20}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
    },
    title: {
        flex: 1,
        marginHorizontal: 10
    },
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        maxHeight: 50,
        textAlignVertical: "center"
    },
    clock: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
}); 

