import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoard1 } from "../screen/OnBorad_1";
import { OnBoard2 } from "../screen/OnBoard_2";
import { OnBoard3 } from "../screen/OnBoard_3";
import { OnBoard4 } from "../screen/OnBoard_4";
import { OnBoard5 } from "../screen/OnBorad_5";

const Stack = createNativeStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Board1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Board1" component={OnBoard1} />
        <Stack.Screen name="Board2" component={OnBoard2} />
        <Stack.Screen name="Board3" component={OnBoard3} />
        <Stack.Screen name="Board4" component={OnBoard4} />
        <Stack.Screen name="Board5" component={OnBoard5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
