import { View, Text, StyleSheet, Image  } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import CustomText from "./CustomText";
import IngredientsCapsuleList from "./IngredientsCapsuleList";

const ingredients = ["SPoulet", "Riz", "Oignon", "Poivron", "Tomate", "Piment", "Paprika", "Curry", "Sel", "Poivre"];

export default function MealInformationSheet(): JSX.Element{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <CustomText text="Nom du plat" textType="subtitle"/>
                </View>
                <View style={styles.clock}>
                    <Ionicons name="time-outline" size={30}/>
                    <Text style={styles.text}>1h</Text>
                </View>
            </View>

            <Image style={styles.image} source={require("../assets/meals/paella.jpeg")}/>

            <View style={styles.mainText}>
                <CustomText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            textType="paragraph"/>
                <IngredientsCapsuleList ingredients={ingredients}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        borderWidth: 1,
        borderRadius: 20,
      },
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
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
        backgroundColor: "red",
    },
    ingredientText: {
       padding: 5,
       borderWidth: 1,
        borderRadius: 20,
        width: null,
        height: 25
    }

}); 