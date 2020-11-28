import React, {Component} from "react";
import 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import PersonalBlog from './components/PersonalBlog.components';
import PersonalQuestion from './components/PersonalQuestion.components';
import PersonalClass from './components/PersonalClass.components';
import { connect } from 'react-redux'
import colors from '../../themes/color';
const Tab = createMaterialTopTabNavigator();

function TabView(props) {
  console.log("Profile.routers.js", props);
  const {showBlogDetailModal, showQuestionDetailModal} = props;
  return (
    //<NavigationContainer>
      <Tab.Navigator
        initialRouteName="MyBlog"
        tabBarOptions={{
          activeTintColor: "#606770",
          labelStyle: {fontSize: 12, fontWeight: "bold"},
          //style: {backgroundColor: "powderblue"},
          indicatorStyle: {backgroundColor: colors.primary},
        }}>
        <Tab.Screen
          name="MyBlog"
          component={connect(()=>({showBlogDetailModal}))(PersonalBlog)}
          options={{tabBarLabel: "Blogs"}}
        />
        <Tab.Screen
          name="MyQuestion"
          component={connect(()=>({showQuestionDetailModal}))(PersonalQuestion)}
          options={{tabBarLabel: "Questions"}}
        />
        <Tab.Screen
          name="MyClass"
          component={connect()(PersonalClass)}
          options={{tabBarLabel: "Classes"}}
        />
      </Tab.Navigator>
    //</NavigationContainer>
  );
}

export default TabView;
