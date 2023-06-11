import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import PantryScreen from "../screens/PantryScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { Ionicons } from '@expo/vector-icons';
import MealNavigation from "./MealNavigation";
import PantryNavigation from "./PantryNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
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
                                            }}/>
                    <BottomTabNavigator.Screen name="Favorite" component={FavoriteScreen}
                                            options={{
                                                title: 'Favorite',
                                                    tabBarIcon: ({ focused, color, size }) => (
                                                        <Ionicons
                                                            name={focused ? 'ios-heart' : 'ios-heart-outline'}
                                                            size={size}
                                                            color={color}
                                                        />
                                                    ),
                                            }}/>
                    <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                                            options={{
                                                title: 'Settings',
                                                    tabBarIcon: ({ focused, color, size }) => (
                                                        <Ionicons
                                                            name={focused ? 'ios-settings' : 'ios-settings-outline'}
                                                            size={size}
                                                            color={color}
                                                        />
                                                    ),
                                            }}/>
                </BottomTabNavigator.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}