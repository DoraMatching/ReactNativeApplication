import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import LoginContainer from '../screens/Login/Login.container';
import RegisterContainer from '../screens/Register/Register.container';
import Home from '../screens/Home/Home.screens';
const Stack = createStackNavigator();


const myRouters = ({ params }) => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="Register" component={RegisterContainer} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Nav" component={tabRouters}/> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  
  
  
  
  export default myRouters;