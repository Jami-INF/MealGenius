import { Meal } from "../models/Meal"
import { View, StyleSheet, Image, Text } from "react-native"
import { Surface } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons"
import Time from "./Time"
import { Swipeable } from 'react-native-gesture-handler';
import DeleteComponent from "./DeleteComponent";

type FavoriteCardProps = {
    meal: Meal,
    theme: Record<string, string>
}

export default function FavoriteCard(props: FavoriteCardProps): JSX.Element {
    return (
        <View style={styles(props.theme).main}>
            <Swipeable renderRightActions={() => <DeleteComponent meal={props.meal} onDelete={deleteMeal}/>}>
                <Surface style={styles(props.theme).card}>
                    <Image style={styles(props.theme).image} source={{uri: props.meal.image}}/>
                    <View style={styles(props.theme).content}>
                        <Text numberOfLines={1} style={styles(props.theme).name}>{props.meal.name}</Text>
                        <Text numberOfLines={2} style={{color: props.theme.secondaryTextColor}}>{props.meal.description}</Text>
                        <View style={styles(props.theme).duration}>
                            <Ionicons name="time-outline" size={20} style={{color: props.theme.secondaryTextColor}}/>
                            <Time time={props.meal.duration} fontSize={15} theme={props.theme}/>
                        </View>
                    </View>
                </Surface>
            </Swipeable>
        </View>
        
    )
}

function deleteMeal(meal: Meal): void {
    console.log("Delete meal: " + meal.name);
}

const styles = (theme) => StyleSheet.create({
    card: {
        width: "auto",
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: theme.surfaceColor
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
        borderRadius: 20
    }
});


