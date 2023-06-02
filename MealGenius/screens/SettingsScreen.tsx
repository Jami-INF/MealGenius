import {View, StyleSheet} from "react-native";
import CustomText from "../components/CustomText";
import { Button, Switch, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen(): JSX.Element {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <CustomText text={"Paramètres"} textType={"title"} />

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
    title: {
        fontSize: 20
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
    }
});