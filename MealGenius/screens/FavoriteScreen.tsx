import {View, StyleSheet} from "react-native";
import {Meal} from "../models/Meal";
import {getMeals} from "../stub/stub";
import FavoriteCards from "../components/FavoriteCards";

const meals: Meal[] = getMeals();

interface FavoriteScreenProps {
    theme: Record<string, string>,
}
export default function FavoriteScreen(props: FavoriteScreenProps) {
    return (
        <View style={styles(props.theme).container}>
            <View style={styles(props.theme).FavoriteItem}>
                <FavoriteCards meals={meals} theme={props.theme}/>
            </View>
        </View>
    )
};

const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    FavoriteItem: {
        marginBottom: 30,
        marginHorizontal: 10,
    }
});
