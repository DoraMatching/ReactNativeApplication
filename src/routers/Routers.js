import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import React, {useState} from "react";
import Home from "../screens/Home/Home.container";
import BlogSearch from "../screens/BlogSearch/BlogSearch.container";
import QuestionSearch from "../screens/QuestionSearch/QuestionSearch.container";
import LoginContainer from "../screens/Login/Login.container";
import RegisterContainer from "../screens/Register/Register.container";


import ProfileContainer from "../screens/Profile/Profile.container";

import ProfileEdit from "../screens/ProfileEdit/ProfileEdit.screens";

import HomeOutlineIcon from "../images/home-outline.svg";
import HomeIcon from "../images/home.svg";
import BookOutlineIcon from "../images/book-outline.svg";
import BookIcon from "../images/book.svg";
import HelpCircleIcon from "../images/help-circle.svg";
import HelpCircleOutlineIcon from "../images/help-circle-outline.svg";
import PersonCircleOutlineIcon from "../images/person-circle-outline.svg";
import PersonCircleIcon from "../images/person-circle.svg";
import CalendarOutlineIcon from "../images/calendar-outline.svg";
import CalendarIcon from "../images/calendar.svg";
import TrainerOutlineIcon from "../images/trainer-outline.svg";
import TrainerIcon from "../images/trainer.svg";
import TopicOutlineIcon from "../images/topic-outline.svg";
import TopicIcon from "../images/topic.svg";

import colors from "../themes/color";


import Schedule from '../screens/Schedule/Schedule.containers';

import PostsSearch from '../screens/PostsSearch/PostsSearch.routers';
import TrainingSearch from '../screens/TrainingSearch/TrainingSearch.routers';

import Search from '../screens/Search/Search.screens';
import ClassSearch from '../screens/ClassSearch/ClassSearch.screens';


import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeRouters = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen name="BlogDetail" component={BlogDetail} /> */}
    <Stack.Screen name="HomeScreen" component={Home} />
    <Stack.Screen name="SearchScreen" component={Search} />
  </Stack.Navigator>
);
const postRouters = ({params}) => (
  <Stack.Navigator
    initialRouteName="PostRouter"
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen name="BlogForm" component={BlogForm} /> */}
    <Stack.Screen name="PostRouter" component={PostsSearch} />
    <Stack.Screen name="SearchScreen" component={Search} />
  </Stack.Navigator>
);
const trainRouters = ({params}) => (
  <Stack.Navigator
    initialRouteName="TrainingSearch"
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen name="BlogDetail" component={BlogDetail} /> */}
    <Stack.Screen name="TrainingSearch" component={TrainingSearch} />
    <Stack.Screen name="ClassSearchScreen" component={ClassSearch} />
  </Stack.Navigator>
);

const profileRouters = ({params}) => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen name="BlogDetail" component={BlogDetail} /> */}
    <Stack.Screen name="Profile" component={ProfileContainer} />
    <Stack.Screen
      name="ProfileEdit"
      component={ProfileEdit}
      options={{
        headerShown: true,
        title: "Edit your profile",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
);

const tabRouters = () => (
  <>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case "Home":
              return focused ? (
                <HomeIcon width={size} height={size} fill={color} />
              ) : (
                <HomeOutlineIcon width={size} height={size} />
              );
            case "Posting":
              return focused ? (
                <BookIcon width={size} height={size} fill={color} />
              ) : (
                <BookOutlineIcon width={size} height={size} />
              );
            case "Questions":
              return focused ? (
                <HelpCircleIcon width={size} height={size} fill={color} />
              ) : (
                <HelpCircleOutlineIcon width={size} height={size} />
              );
            case "Schedule":
              return focused ? (
                <CalendarIcon width={size} height={size} fill={color} />
              ) : (
                <CalendarOutlineIcon width={size} height={size} />
              );
            case "Profile":
              return focused ? (
                <PersonCircleIcon width={size} height={size} fill={color} />
              ) : (
                <PersonCircleOutlineIcon width={size} height={size} />
              );
              case "Training":
              return focused ? (
                <TrainerOutlineIcon width={size} height={size} fill={color} />
              ) : (
                <TrainerIcon width={size} height={size} fill={color}/>
              );
            case "Topics":
              return focused ? (
                <TopicOutlineIcon width={size} height={size} fill={color} />
              ) : (
                <TopicIcon width={size} height={size} fill={color}/>
              );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "dimgray",
        showLabel: true,
      }}>
      <Tab.Screen name="Home" component={homeRouters} />
      <Tab.Screen name="Posting" component={postRouters} />
      {/* <Tab.Screen name="Trainers" component={TrainerSearch} /> */}
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Training" component={trainRouters} />
      {/* <Tab.Screen name="Questions" component={questionRouters} /> */}
      <Tab.Screen name="Profile" component={profileRouters} />
    </Tab.Navigator>
    {/* <FloatingButton></FloatingButton> */}
  </>
);

const myRouters = ({params}) => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginContainer}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={RegisterContainer}
        />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Nav" component={tabRouters} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default myRouters;
