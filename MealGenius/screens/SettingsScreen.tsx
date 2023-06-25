import {View, StyleSheet, Keyboard} from "react-native";
import CustomText from "../components/CustomText";
import { Button, Switch, TextInput } from "react-native-paper";
import React, {useContext, useEffect, useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import { DarkThemeContext } from "../App";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface SettingsScreenProps {
    handleLogout: () => void;
};

export default function SettingsScreen(props: SettingsScreenProps): JSX.Element {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const navigation = useNavigation();
    const { theme, isDarkTheme, setDarkTheme } = useContext(DarkThemeContext);

    const onToggleSwitch = async () => { 
        const darkTheme = !isDarkTheme;
        setDarkTheme(darkTheme);
        setIsSwitchOn(darkTheme);
        await AsyncStorage.setItem('isDarkTheme', darkTheme ? 'true' : 'false');
    }

    const handleLogout = () => {
        props.handleLogout();
    };

    return (
        <View style={styles(theme).container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles(theme).centered}>
                    <View style={styles(theme).accountSubtitle}>
                        <CustomText text={"Compte"} textType={"subtitle"}/>
                    </View>
                    <View style={styles(theme).settingUpdate}>
                        <TextInput label={"Prénom"} 
                            value={""}
                            mode={"outlined"}
                            onChangeText={text => {}}
                            style={styles(theme).textInput}/>

                        <TextInput label={"Nom"}
                            value={""}
                            mode={"outlined"}
                            onChangeText={text => {}}
                            style={styles(theme).textInput}/>

                        <TextInput label={"Courriel"}
                            value={""}
                            mode={"outlined"}
                            onChangeText={text => {}}
                            style={styles(theme).textInput}/>

                        <TextInput label={"Mot de passe"}
                            value={""}
                            mode={"outlined"}
                            onChangeText={text => {}}
                            style={styles(theme).textInput}/>

                        <TextInput label={"Confirmation du mot de passe"}
                            value={""}
                            mode={"outlined"}
                            onChangeText={text => {}}
                            style={styles(theme).textInput}/>

                        <Button children={"Valider"} mode="contained-tonal" onPress={() => {}} style={styles(theme).validateButton}/>
                    </View>
                    <View style={styles(theme).theme}>
                        <CustomText text={"Thème"} textType={"subtitle"}/>
                        <View style={styles(theme).switch}>
                        <Ionicons name="sunny-outline" size={30} style={{color: theme.secondaryTextColor}}/>
                        <Switch value={isDarkTheme} onValueChange={onToggleSwitch} />
                        <Ionicons name="moon-outline" size={30} style={{color: theme.secondaryTextColor}}/>
                    </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <Button mode="outlined" onPress={handleLogout} style={styles(theme).logoutButton}>
                Déconnexion
            </Button>
        </View>
    )
};

const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    centered: {
        alignItems: "center"
    },
    switch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "40%"
    },
    theme: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 50,
        paddingHorizontal: 20
    },
    settingUpdate: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    },
    textInput: {
        width: "90%"
    },
    accountSubtitle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    validateButton: {
        marginTop: 20,
        width: "90%"
    },
    logoutButton: {
        position: "absolute",
        bottom: 20, // Espacement en bas
        left: 40, // Espacement à gauche
        right: 40, // Espacement à droite
    }
});