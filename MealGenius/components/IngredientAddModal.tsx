import { Button, Divider, FAB, Modal, IconButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "./SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { getFoods } from "../stub/stub";
import { Food } from "../models/Food";

type IngredientAddModalProps = {
    visible:boolean,
    onRequestClose: () => void,
    onRequestValidate: () => void,
    theme: Record<string, string>
}

let ingredientsSearched: Food[] = getFoods();

export default function IngredientAddModal(props: IngredientAddModalProps): JSX.Element {
    return (
        <Modal visible={props.visible} onDismiss={props.onRequestClose} contentContainerStyle={styles(props.theme).modal}>
            <View>
                <View style={styles(props.theme).header}>
                    <View style={styles(props.theme).searchBar}>
                        <SearchBar placeholder={"Rechercher un ingrédient"} 
                            onChangeText={function (text: string): void {
                                console.log(text);
                            }}/>
                    </View>
                    <View style={styles(props.theme).fabButton}>
                    <IconButton icon="close"
                            size={25}
                            mode="contained-tonal"
                            style={styles(props.theme).closeButton}
                            onPress={props.onRequestClose}/>
                    </View>
                    
                </View>
                <View>
                    <FlatList data={ingredientsSearched} 
                        renderItem={({item}) => 
                        <View>
                            <View style={styles(props.theme).food}>
                                <Text style={styles(props.theme).itemName}>{item.name}</Text>
                                <IconButton icon="plus"
                                            size={20}
                                            mode="contained-tonal"
                                            style={styles(props.theme).deleteButton}
                                            onPress={() => console.log(`delete `)}/>
                            </View>
                            <Divider />
                        </View>}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles(props.theme).FlatList}
                    />
                    <Button style={styles(props.theme).Validate} onPress={() => props.onRequestValidate} mode="contained">Valider</Button>
                </View>
            </View>
        </Modal>
    )
}

const styles = (theme) => StyleSheet.create({
    modal: {
        backgroundColor: theme.surfaceColor,
        margin: 20,
        height: "90%",
        borderRadius: 20,
        padding: 20
    },
    closeButton: {
        alignSelf: "flex-end",
        marginLeft: 12
    },
    deleteButton: {
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
        height: "80%",
        marginTop: 10
    },
    food: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10
    },
    Validate: {
        marginTop: 10
    },
    itemName: {
        color: theme.textColor
    }
});
