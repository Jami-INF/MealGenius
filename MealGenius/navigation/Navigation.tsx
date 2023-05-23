import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import PantryScreen from "../screens/PantryScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                           }}/>
                <BottomTabNavigator.Screen name="Pantry" component={PantryScreen}
                                           options={{
                                               title: 'Pantry',
                                           }}/>
                <BottomTabNavigator.Screen name="Favorite" component={FavoriteScreen}
                                           options={{
                                               title: 'Favorite',
                                           }}/>
                <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                                           options={{
                                               title: 'Settings',
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}