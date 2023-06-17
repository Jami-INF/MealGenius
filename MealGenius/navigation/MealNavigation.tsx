import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

interface MealNavigationProps {
    theme: Record<string, string>,
}
export default function MealNavigation(props: MealNavigationProps): JSX.Element {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="MealList">
            <Stack.Screen name="MealList" component={() => <HomeScreen theme={props.theme} />} 
                options={{
                    title: "Meal Genius",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 32,
                   },
                }}/>
            <Stack.Screen 
                name="MealDetails"
                component={MealDetailsScreen}
                options={({ route }) => ({
                    // @ts-ignore
                    // title: route?.params?.meal?.name || "Détails", 
                    headerShown: false
                })}
                    />
        </Stack.Navigator> 
    );
}
