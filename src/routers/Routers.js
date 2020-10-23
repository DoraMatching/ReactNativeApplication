import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import React from "react";
import Home from "../screens/Home/Home.container";
import LoginContainer from "../screens/Login/Login.container";
import RegisterContainer from "../screens/Register/Register.container";
import BlogDetail from "../screens/BlogDetail/BlogDetail.screens";
import QuestionList from '../screens/QuestionList/QuestionList.screens';

import HomeOutlineIcon from '../images/home-outline.svg';
import HomeIcon from '../images/home.svg';
import BookOutlineIcon from '../images/book-outline.svg';
import BookIcon from '../images/book.svg';
import HelpCircleIcon from '../images/help-circle.svg';
import HelpCircleOutlineIcon from '../images/help-circle-outline.svg';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabRouters = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        switch (route.name){
          case "Home" : 
            return focused ? 
            <HomeIcon  width={size} height={size} fill={color} /> :
            <HomeOutlineIcon  width={size} height={size}  />;
          case "Blogs" :
            return focused ? 
            <BookIcon  width={size} height={size} fill={color} /> : 
            <BookOutlineIcon  width={size} height={size}  />;
          case "Questions" :
            return focused ? 
            <HelpCircleIcon  width={size} height={size} fill={color} /> : 
            <HelpCircleOutlineIcon  width={size} height={size}  />;
        }
        
      },
    })}
    tabBarOptions={{
      activeTintColor: "blueviolet",
      inactiveTintColor: "dimgray",
    }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Blogs" component={BlogDetail} />
    <Tab.Screen name="Questions" component={QuestionList} />
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
