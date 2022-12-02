import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-status";
import {NativeBaseProvider,StatusBar} from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from "./src/Screens/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NativeBaseProvider>
            <NavigationContainer>
                <StatusBar hidden={true} />
                <Stack.Navigator initialRouteName="Bottom"
                screenOption={{
                    headerShown: false,
                }}
                >
                    <Stack.screen name="Login" component={LoginScreen} />
                    <Stack.screen name="Register" component={RegisterScreen} />
                    <Stack.screen name="Order" component={OrderScreen} />
                    <Stack.screen name="Bottom" component={BottomNav} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

