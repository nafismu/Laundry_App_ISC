import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import CreateAccountScreen from "./Screens/CreateAccountScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomNavigator" component={MainTabNavigator} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
}
