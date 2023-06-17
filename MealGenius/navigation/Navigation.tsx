import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import PantryScreen from "../screens/PantryScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { Ionicons } from '@expo/vector-icons';
import MealNavigation from "./MealNavigation";
import PantryNavigation from "./PantryNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "../components/Login/Login";

export default function Navigation(props): JSX.Element {
    const BottomTabNavigator = createBottomTabNavigator();
    const SettingsComponent = () => <SettingsScreen handleLogout={props.onLogout} />;

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomTabNavigator.Navigator 
                    initialRouteName="Home">

                    <BottomTabNavigator.Screen name="Home" component={MealNavigation}
                        options={{
                                headerShown: false,
                                tabBarIcon: ({ focused, color, size }) => (
                                    <Ionicons
                                        name={focused ? 'ios-home' : 'ios-home-outline'}
                                        size={size}
                                        color={color}
                                    />
                                ),
                                title: "Menu",
                        }}/>
                    <BottomTabNavigator.Screen name="Pantry" component={PantryNavigation}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused, color, size }) => (
                                <Ionicons
                                    name={focused ? 'ios-restaurant' : 'ios-restaurant-outline'}
                                    size={size}
                                    color={color}
                                />
                            ),
                            title: "Garde-manger"
                        }}/>
                    <BottomTabNavigator.Screen name="Favorite" component={FavoriteScreen}
                        options={{
                            title: 'Favoris',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Ionicons
                                    name={focused ? 'ios-heart' : 'ios-heart-outline'}
                                    size={size}
                                    color={color}
                                />
                            ),
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 32,
                            },
                        }}/>
                    <BottomTabNavigator.Screen name="Settings" component={SettingsComponent}
                       options={{
                            title: 'Paramètres',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Ionicons
                                    name={focused ? 'ios-settings' : 'ios-settings-outline'}
                                    size={size}
                                    color={color}
                                />
                            ),
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 32,
                            },

                        }}/>
                </BottomTabNavigator.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}