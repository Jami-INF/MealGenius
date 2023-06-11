import { Image, StyleSheet, Text, View } from "react-native";
import { Meal } from "../models/Meal";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import { NavigationProp } from "@react-navigation/native";

type MealDetailsScreenProps = {
    route: {
        params: {
            meal: Meal
        }
    },
    /** The navigation prop. */
    navigation: NavigationProp<ReactNavigation.RootParamList>
}

// @ts-ignore
export default function MealDetailsScreen(props: MealDetailsScreenProps) {

    return (
        <View style={styles.container}>
            <BackButton onPress={() => props.navigation.goBack()}/>
            <Image style={styles.image} source={{uri: props.route.params.meal.image}}/>
            <ScrollView style={styles.scrollview}
                        bounces={false}>
              
                <View style={styles.body}>    
                    <Text>{props.route.params.meal.name}</Text>
                </View>
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 250,
        zIndex: -1,
    },
    body: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 230,
        height: 1000
    },
    scrollview : {
        backgroundColor: "transparent",
        height: 100,
        width: '100%'
    }
}); 