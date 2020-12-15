import React, {Component} from "react";
import 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import PersonalBlog from './components/PersonalBlog.components';
import PersonalQuestion from './components/PersonalQuestion.components';
import PersonalClass from './components/PersonalClass.components';
import PersonalClassroom from './components/PersonalClassroom.components';
import {connect} from "react-redux";
import colors from '../../themes/color';
const Tab = createMaterialTopTabNavigator();

function TabView(props) {
  const {showBlogDetailModal, showQuestionDetailModal, UserID} = props;
  return (
    <NavigationContainer independent={true}>
   
      <Tab.Navigator
        initialRouteName="MyBlog"
        tabBarOptions={{
          activeTintColor: "#606770",
          labelStyle: {fontSize: 12, fontWeight: "bold"},
          //style: {backgroundColor: "powderblue"},
          indicatorStyle: {backgroundColor: colors.primary},
          //scrollEnabled : true,
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
        {/* <Tab.Screen
          name="MyClass"
          component={PersonalClass}
          options={{tabBarLabel: "Classes"}}
        /> */}
        <Tab.Screen
          name="MyClassroom"
          component={connect(() => ({UserID}))(PersonalClassroom)}
          options={{tabBarLabel: "Classrooms"}}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

function AnotherTabView(){
  return (
    <Tab.Screen
    name="MyClassroom"
    component={TabView}
    options={{tabBarLabel: "Classrooms"}}
  />
  )
}

export default TabView;
