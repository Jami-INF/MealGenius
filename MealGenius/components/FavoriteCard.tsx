import { Meal } from "../models/Meal"
import { View, StyleSheet, Image, Text } from "react-native"
import { Surface } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons"
import Time from "./Time"
import { Swipeable } from 'react-native-gesture-handler';
import DeleteComponent from "./DeleteComponent";
import { useContext } from "react";
import { DarkThemeContext } from "../App";

type FavoriteCardProps = {
    meal: Meal,
    onDelete: (meal: Meal) => void
}

export default function FavoriteCard(props: FavoriteCardProps): JSX.Element {
    const { theme } = useContext(DarkThemeContext);

    return (
        <View style={styles(theme).wrapper}>
            <View style={styles(theme).main}>
                <Swipeable renderRightActions={() => <DeleteComponent meal={props.meal} onDelete={props.onDelete}/>}>
                    <Surface style={styles(theme).card} mode={"flat"}>
                        <Image style={styles(theme).image} source={{uri: props.meal.image}}/>
                        <View style={styles(theme).content}>
                            <Text numberOfLines={1} style={styles(theme).name}>{props.meal.name}</Text>
                            <Text numberOfLines={2} style={{color: theme.secondaryTextColor}}>{props.meal.description}</Text>
                            <View style={styles(theme).duration}>
                                <Ionicons name="time-outline" size={20} style={{color: theme.secondaryTextColor}}/>
                                <Time time={props.meal.duration} fontSize={15}/>
                            </View>
                        </View>
                    </Surface>
                </Swipeable>
            </View>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    card: {
        width: "auto",
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: theme.surfaceColor,
        height: 100
    },
    content: {
        justifyContent: "space-between",
        flexDirection: "column",
        marginLeft: 10,
        width: "70%"
    },
    image: {
        width: "25%",
        height: 100,
        resizeMode: "cover",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    name: {
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        color: theme.textColor
    },
    duration: {
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 5
    },
    durationText: {
        fontSize: 20
    },
    main: {
        backgroundColor: 'red',
        margin: 5,
        borderRadius: 20,
        height: 100
    },
    wrapper: {
        margin: 5,
        backgroundColor: 'white',
    }
});


