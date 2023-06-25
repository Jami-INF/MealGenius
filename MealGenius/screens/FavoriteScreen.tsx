import React, { useContext, } from "react";
import { View, StyleSheet } from "react-native";
import FavoriteCards from "../components/FavoriteCards";
import { DarkThemeContext } from "../App";

export default function FavoriteScreen(): JSX.Element {
    const { theme } = useContext(DarkThemeContext);

    return (
        <View style={styles(theme).container}>
            <View style={styles(theme).favoriteItem}>
                <FavoriteCards/>
            </View>
        </View>
    );
};


const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    favoriteItem: {
        marginBottom: 30,
        marginHorizontal: 10,
    }
});;
