import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import React from "react";
import Home from "../screens/Home/Home.container";
import LoginContainer from "../screens/Login/Login.container";
import RegisterContainer from "../screens/Register/Register.container";
import BlogDetail from "../screens/BlogDetail/BlogDetail.screens";

import SvgUri from "react-native-svg-uri";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabRouters = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home.svg" : "home-outline.svg";
        } else if (route.name === "Blogs") {
          iconName = focused ? "home.svg" : "home-outline.svg";
        }

        // You can return any component that you like here!
        return <SvgUri width={size} height={size} source={require(`../images/home.svg`)} fill={color}/> ;
        // <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "blueviolet",
      inactiveTintColor: "gray",
    }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Blogs" component={BlogDetail} />
  </Tab.Navigator>
  // </NavigationContainer>
);

const myRouters = ({params}) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={RegisterContainer} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Nav" component={tabRouters} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default myRouters;
