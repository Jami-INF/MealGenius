import { View, Text, StyleSheet, Image  } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import CustomText from "./CustomText";
import IngredientsCapsuleList from "./IngredientsCapsuleList";
import { Meal } from "../models/Meal";
import Time from "./Time";
import { Surface } from 'react-native-paper';

type MealInformationSheetProps = {
    meal: Meal,
    theme: Record<string, string>
}

export default function MealInformationSheet(props: MealInformationSheetProps): JSX.Element {
    return (
        <Surface style={styles(props.theme).container}>
            <View style={styles(props.theme).header}>
                <View style={styles(props.theme).title}>
                    <CustomText text={props.meal.name} textType="subtitle" theme={props.theme}/>
                </View>
                <View style={styles(props.theme).clock}>
                    <Ionicons name="time-outline" size={30} style={{color: props.theme.secondaryTextColor}}/>
                    <Time time={props.meal.duration} fontSize={20} theme={props.theme}/>
                </View>
            </View>


            <Image style={styles(props.theme).image} source={{uri: props.meal.image
            }}/>
            {/* <CustomImage imageType={props.meal.image.type} imageName={props.meal.image.name} imageExtension={props.meal.image.extension}/> */}

            <View style={styles(props.theme).mainText}>
                <CustomText text={props.meal.description} textType="paragraph" theme={props.theme}/>
                <View style={styles(props.theme).ingredients}>
                    <IngredientsCapsuleList ingredients={props.meal.ingredients} theme={props.theme}/>
                </View>
            </View>
        </Surface>
    )
}

const styles = (theme) => StyleSheet.create({
    title: {
        marginHorizontal: 10
    },
    text: {
        fontSize: 16,
    },
    mainText: {
        margin: 10
    },
    container: {
        flexDirection: "column",
        borderRadius: 20,
        backgroundColor: theme.surfaceColor
      },
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        maxHeight: 50,
        textAlignVertical: "center"
    },
    flexColumn: {
        flexDirection: "column"
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
    },
    ingredientText: {
       padding: 5,
       borderWidth: 1,
        borderRadius: 20,
        width: null,
        height: 25
    },
    ingredients: {
        marginTop: 10
    }
}); 