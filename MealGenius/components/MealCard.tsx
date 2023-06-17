import { Meal } from "../models/Meal"
import { View, StyleSheet, Image } from "react-native"
import CustomText from "./CustomText"
import { Ionicons } from "@expo/vector-icons"
import Time from "./Time"
import { Surface } from 'react-native-paper';

type MealCardProps = {
    meal: Meal,
    theme: Record<string, string>
}

/** Get a card with the meal's name, image, and duration
 * @param props The meal to display
 */
export default function MealCard(props: MealCardProps): JSX.Element {
    return (
        <Surface style={styles(props.theme).card}>
            <Image style={styles(props.theme).image} source={{uri: props.meal.image}}/>
            <View style={styles(props.theme).header}>
                <View style={styles(props.theme).title}>
                    <CustomText text={props.meal.name}
                        textType="subtitle"
                        ellipsizeMode="tail"
                        numberofLines={1}
                        theme={props.theme}/>
                </View>
                <View style={styles(props.theme).clock}>
                    <Ionicons name="time-outline" size={30} style={{color: props.theme.secondaryTextColor}}/>
                    <Time time={props.meal.duration} fontSize={20} theme={props.theme}/>
                </View>
            </View>
        </Surface>
    )
}

const styles = (theme) => StyleSheet.create({
    card: {
        width: 300,
        borderRadius: 20,
        marginHorizontal: 3,
        marginVertical: 3,
        backgroundColor: theme.surfaceColor
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

