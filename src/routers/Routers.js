import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home/Home.container";
import LoginContainer from "../screens/Login/Login.container";
import RegisterContainer from "../screens/Register/Register.container";

const Stack = createStackNavigator();

const myRouters = ({params}) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={RegisterContainer} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default myRouters;
