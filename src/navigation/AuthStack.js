import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro1Screen from "../screens/Intro1Screen";
import Intro2Screen from "../screens/Intro2Screen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro_1Screen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro1Screen" component={Intro1Screen} />
        <Stack.Screen name="Intro2Screen" component={Intro2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
