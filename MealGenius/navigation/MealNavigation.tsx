import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

export default function MealNavigation(): JSX.Element {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="MealList">
            <Stack.Screen name="MealList" component={HomeScreen} 
                options={{
                    title: "Meal Genius",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 32,
                   },
                }}/>
            <Stack.Screen 
                name="MealDetails"
                component={(prop) => <MealDetailsScreen {...prop} route={prop.route} />}
                options={({ route }) => ({
                    // @ts-ignore
                    // title: route?.params?.meal?.name || "Détails", 
                    headerShown: false
                })}
                    />
        </Stack.Navigator> 
    );
}
