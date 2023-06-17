import { createStackNavigator } from "@react-navigation/stack";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import PantryScreen from "../screens/PantryScreen";

interface PantryNavigationProps {
    theme: Record<string, string>,
}
export default function PantryNavigation(props: PantryNavigationProps): JSX.Element {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="PantryList">
            <Stack.Screen name="PantryList" component={() => <PantryScreen theme={props.theme} />} 
                options={{
                    title: "Garde-manger",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 32,
                   },
                }}/>
            <Stack.Screen 
                name="PantryDetails"
                component={MealDetailsScreen}
                options={({ route }) => ({
                    // @ts-ignore
                    title: route?.params?.meal?.name || "Détails", 
                })}
                    />
        </Stack.Navigator> 
    );
}
