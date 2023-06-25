import { Meal } from "../models/Meal"
import { View, StyleSheet, Image, Text } from "react-native"
import CustomText from "./CustomText"
import { Ionicons } from "@expo/vector-icons"
import Time from "./Time"
import { Surface } from 'react-native-paper';
import { useContext } from "react"
import { DarkThemeContext } from "../App"

type MealCardProps = {
    meal: Meal,
}

/** Get a card with the meal's name, image, and duration
 * @param props The meal to display
 */
export default function MealCard(props: MealCardProps): JSX.Element {
    const { theme } = useContext(DarkThemeContext);

    return (
        <Surface style={styles(theme).card}>
            <Image testID="meal-image" style={styles(theme).image} source={{uri: props.meal.image}}/>
            <View style={styles(theme).header}>
                <View style={styles(theme).title}>
                    <Text testID="meal-name"
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={styles(theme).subtitle}/>
                </View>
                <View style={styles(theme).clock}>
                    <Ionicons name="time-outline" size={30} style={{color: theme.secondaryTextColor}}/>
                    <Time time={props.meal.duration} fontSize={20}/>
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
    subtitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: theme.textColor
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

