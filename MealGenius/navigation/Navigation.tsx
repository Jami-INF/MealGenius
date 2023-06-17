import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { Ionicons } from '@expo/vector-icons';
import MealNavigation from "./MealNavigation";
import PantryNavigation from "./PantryNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
interface NavigationProps {
    theme: Record<string, string>,
    isDarkMode: boolean,
    setIsDarkMode: Function,
}

export default function Navigation(props: NavigationProps) {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={props.isDarkMode ? DarkTheme : DefaultTheme}>
                <BottomTabNavigator.Navigator 
                    initialRouteName="Home">

                    <BottomTabNavigator.Screen name="Home" component={() => <MealNavigation theme={props.theme}/>}
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
                    <BottomTabNavigator.Screen name="Pantry" component={() => <PantryNavigation theme={props.theme}/>}
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
                    <BottomTabNavigator.Screen name="Favorite" component={() => <FavoriteScreen theme={props.theme}/>}
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
                    <BottomTabNavigator.Screen name="Settings" component={() => <SettingsScreen theme={props.theme} isDarkTheme={props.isDarkMode} setDarkTheme={props.setIsDarkMode} />}
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