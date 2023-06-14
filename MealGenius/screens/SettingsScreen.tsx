import {View, StyleSheet} from "react-native";
import CustomText from "../components/CustomText";
import { Button, Switch, TextInput } from "react-native-paper";
import React, {useEffect, useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

type SettingsScreenProps = {
    handleLogout: () => void;
};
export default function SettingsScreen(props: SettingsScreenProps) {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const navigation = useNavigation();

    const handleLogout = () => {
        props.handleLogout();
    };

    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <View style={styles.accountSubtitle}>
                    <CustomText text={"Compte"} textType={"subtitle"} />
                </View>
                <View style={styles.setingUpdate}>
                    <TextInput label={"Prénom"}
                        value={""}
                        mode={"outlined"}
                        onChangeText={text => {}}
                        style={styles.textInput}/>

                    <TextInput label={"Nom"}
                        value={""}
                        mode={"outlined"}
                        onChangeText={text => {}}
                        style={styles.textInput}/>

                    <TextInput label={"Courriel"}
                        value={""}
                        mode={"outlined"}
                        onChangeText={text => {}}
                        style={styles.textInput}/>

                    <TextInput label={"Mot de passe"}
                        value={""}
                        mode={"outlined"}
                        onChangeText={text => {}}
                        style={styles.textInput}/>

                    <TextInput label={"Confirmation du mot de passe"}
                        value={""}
                        mode={"outlined"}
                        onChangeText={text => {}}
                        style={styles.textInput}/>

                    <Button children={"Valider"} mode="contained-tonal" onPress={() => {}} style={styles.validateButton}/>
                </View>
                <View style={styles.theme}>
                    <CustomText text={"Thème"} textType={"subtitle"} />
                    <View style={styles.switch}>
                    <Ionicons name="sunny-outline" size={30}/>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    <Ionicons name="moon-outline" size={30}/>
                </View>
                </View>

            </View>
            <Button mode="outlined" onPress={handleLogout} style={styles.logoutButton}>
                Déconnexion
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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
    setingUpdate: {
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
        marginTop: 20
    },
    validateButton: {
        marginTop: 20,
        width: "90%"
    },
    logoutButton: {
        position: "absolute",
        bottom: 16, // Espacement en bas
        left: 40, // Espacement à gauche
        right: 40, // Espacement à droite
    }
});