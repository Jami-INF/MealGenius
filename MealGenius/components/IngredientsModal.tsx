import { Divider, FAB, Modal } from "react-native-paper";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { getFoods } from "../stub/stub";
import { IFood } from "../models/IFood";
import React from "react";
import SearchBar from "./SearchBar";

type IngredientsModalProps = {
    visible:boolean,
    onRequestClose: () => void,
    onRequestValidate: () => void
}

const foods: IFood[] = getFoods();

export default function IngredientsModal(props: IngredientsModalProps): JSX.Element {
    return (
        <Modal visible={props.visible} onDismiss={props.onRequestClose} contentContainerStyle={styles.modal}>
            <View>
                <View style={styles.header}>
                    <View style={styles.searchBar}>
                        <SearchBar placeholder={"Rechercher un ingrédient"} 
                            onChangeText={function (text: string): void {
                                console.log(text);
                            }}/>
                    </View>
                    <View style={styles.fabButton}>
                        <FAB icon="close" onPress={props.onRequestClose} style={styles.closeButton} size="small"/>
                    </View>
                    
                </View>
                <View>
                    <FlatList data={foods} 
                        renderItem={({item}) => 
                        <View>
                            <View style={styles.food}>
                                <Text>{item.name}</Text>
                                <FAB icon="minus" onPress={() => { } } size="small" />
                            </View>
                            <Divider />
                        </View>}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.FlatList}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "white",
        margin: 20,
        height: "90%",
        borderRadius: 20,
        padding: 20
    },
    closeButton: {
        alignSelf: "flex-end"
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    searchBar: {
        width: "80%"
    },
    fabButton: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 10
    },
    FlatList: {
        height: "90%",
        marginTop: 10
    },
    food: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10
    }
});
