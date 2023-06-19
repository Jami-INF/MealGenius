import { createStackNavigator } from "@react-navigation/stack";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import PantryScreen from "../screens/PantryScreen";
import { useContext } from "react";
import { DarkThemeContext } from "../App";

export default function PantryNavigation(): JSX.Element {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="PantryList">
            <Stack.Screen name="PantryList" component={PantryScreen} 
                options={{
                    title: "Garde-manger",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 32,
                   },
                }}/>
            <Stack.Screen 
                name="PantryDetails"
                component={(prop) => <MealDetailsScreen {...prop} route={prop.route}/>}
                options={({ route }) => ({
                    // @ts-ignore
                    headerShown: false
                })}
                    />
        </Stack.Navigator> 
    );
}
