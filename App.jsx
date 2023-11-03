import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Nav from "./components/nav";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Nav />
        {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Nav} />
      </Stack.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
