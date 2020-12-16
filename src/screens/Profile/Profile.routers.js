import React, {Component} from "react";
import "react-native-gesture-handler";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import PersonalBlog from "./components/PersonalBlog.components";
import PersonalQuestion from "./components/PersonalQuestion.components";
import PersonalClass from "./components/PersonalClass.components";
import PersonalClassroom from "./components/PersonalClassroom.components";
import {connect} from "react-redux";
import colors from "../../themes/color";
const Tab = createMaterialTopTabNavigator();

function TabView(props) {
  console.log("Profile.routers.js", props);
  const {
    showBlogDetailModal,
    showQuestionDetailModal,
    showClassDetailModal,
    UserID,
    UserRoles,
  } = props;
  return (
    //<NavigationContainer>
    <Tab.Navigator
      initialRouteName="MyBlog"
      tabBarOptions={{
        activeTintColor: "#606770",
        labelStyle: {fontSize: 12, fontWeight: "bold"},
        //style: {backgroundColor: "powderblue"},
        indicatorStyle: {backgroundColor: colors.primary},
        scrollEnabled: true,
      }}>
      <Tab.Screen
        name="MyBlog"
        component={connect(() => ({showBlogDetailModal}))(PersonalBlog)}
        options={{tabBarLabel: "Blogs"}}
      />
      <Tab.Screen
        name="MyQuestion"
        component={connect(() => ({showQuestionDetailModal}))(PersonalQuestion)}
        options={{tabBarLabel: "Questions"}}
      />
      <Tab.Screen
        name="MyClass"
        component={connect(() => ({showClassDetailModal}))(PersonalClass)}
        options={{tabBarLabel: "Classes"}}
      />
      { UserRoles.indexOf("TRAINER") !== -1 &&
        <Tab.Screen
          name="MyClassroom"
          component={connect(() => ({UserID, showClassDetailModal}))(
            PersonalClassroom,
          )}
          options={{tabBarLabel: "Classrooms"}}
        />
      }
    </Tab.Navigator>
    //</NavigationContainer>
  );
}

export default TabView;
