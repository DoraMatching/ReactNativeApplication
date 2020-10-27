import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import React from "react";
import Home from "../screens/Home/Home.container";
import LoginContainer from "../screens/Login/Login.container";
import RegisterContainer from "../screens/Register/Register.container";
import BlogDetail from "../screens/BlogDetail/BlogDetail.screens";
import QuestionList from '../screens/QuestionList/QuestionList.screens';
import Profile from '../screens/Profile/Profile.screens';
import Schedule from '../screens/Schedule/Schedule.screens';
import Comment from '../components/Comment';
import QuestionDetail from '../screens/QuestionDetail/QuestionDetail.screens';

import HomeOutlineIcon from '../images/home-outline.svg';
import HomeIcon from '../images/home.svg';
import BookOutlineIcon from '../images/book-outline.svg';
import BookIcon from '../images/book.svg';
import HelpCircleIcon from '../images/help-circle.svg';
import HelpCircleOutlineIcon from '../images/help-circle-outline.svg';
import PersonCircleOutlineIcon from '../images/person-circle-outline.svg';
import PersonCircleIcon from '../images/person-circle.svg';
import CalendarOutlineIcon from '../images/calendar-outline.svg';
import CalendarIcon from '../images/calendar.svg';

import colors from '../themes/color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeRouters = () => (
  <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
);
const blogRouters = ({params}) => (
  <Stack.Navigator
      initialRouteName="BlogSearch"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="BlogSearch" component={QuestionList} />
    </Stack.Navigator>
);

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
          case "Schedule" :
            return focused ? 
            <CalendarIcon  width={size} height={size} fill={color} /> : 
            <CalendarOutlineIcon  width={size} height={size}  />;
          case "Profile" :
            return focused ? 
            <PersonCircleIcon  width={size} height={size} fill={color} /> : 
            <PersonCircleOutlineIcon  width={size} height={size}  />;
        }
        
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: "dimgray",
    }}
    >
    <Tab.Screen name="Home" component={homeRouters} />
    <Tab.Screen name="Blogs" component={blogRouters} />
    <Tab.Screen name="Schedule" component={Comment} />
    <Tab.Screen name="Questions" component={QuestionDetail} /> 
    <Tab.Screen name="Profile" component={Profile} />
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
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginContainer} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterContainer} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Nav" component={tabRouters} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default myRouters;
