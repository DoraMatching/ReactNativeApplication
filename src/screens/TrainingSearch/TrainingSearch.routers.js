import React, {Component} from "react";
import "react-native-gesture-handler";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import TopicSearch from "../TopicSearch/TopicSearch.screens";
import TrainerSearch from "../TrainerSearch/TrainerSearch.screens";
import colors from "../../themes/color";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";

import FinderIcon from "../../images/finder.svg";
import FloatingButtonAction from "../../helpers/FloatingActionButton";

import TopicDetailModal from "../TopicDetail/TopicDetail.modals";
import ProfileInfoModal from "../ProfileInfo/ProfileInfo.modals";
import OptionModal from "../../helpers/optionModal";

import {connect} from "react-redux";

const Tab = createMaterialTopTabNavigator();
var screen = Dimensions.get("window");
class TabView extends Component {
  constructor(props) {
    super(props);

    this.topicDetailModal = null;

    this.setTopicDetailModalRef = (element) => {
      this.topicDetailModal = element;
    };

    this.profileInfoModal = null;

    this.setProfileInfoModalRef = (element) => {
      this.profileInfoModal = element;
    };

    this.optionModal = null;

    this.setOptionModalRef = (element) => {
      this.optionModal = element;
    };
  }
  render() {
    return (
      //<NavigationContainer>
      <>
        <TopicDetailModal ref={this.setTopicDetailModalRef}></TopicDetailModal>
        <ProfileInfoModal ref={this.setProfileInfoModalRef}></ProfileInfoModal>
        <OptionModal
          ref={this.setOptionModalRef}
          onOpenBlogEditForm={
            this.blogFormEditModal
              ? this.blogFormEditModal.showBlogFormEditModal
              : () => {}
          }
          onOpenQuestionEditForm={
            this.questionFormEditModal
              ? this.questionFormEditModal.showQuestionFormEditModal
              : () => {}
          }></OptionModal>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <View style={styles.searchIcon}>
              <FinderIcon width={22} height={22} />
            </View>

            <TextInput
              style={styles.inputText}
              placeholder={"I'm looking for..."}
              placeholderTextColor={"#999"}
              underlineColorAndroid={"#fff"}
              autoCorrect={false}
              onFocus={() => {this.props.navigation.navigate("ClassSearchScreen")}}
              ref={(inputSearch) => {
                this.inputSearch = inputSearch;
              }}
            />
          </View>
        </View>
        <Tab.Navigator
          initialRouteName="TopicSearch"
          tabBarOptions={{
            activeTintColor: "#606770",
            labelStyle: {fontSize: 12, fontWeight: "bold"},
            //style: {backgroundColor: "powderblue"},
            indicatorStyle: {backgroundColor: colors.primary},
            //scrollEnabled: true,
          }}>
          <Tab.Screen
            name="TopicSearch"
            component={connect((state) => ({
              //test: "abc",
              showTopicDetailModal: this.topicDetailModal?.showTopicDetailModal,
              showOptionModal: this.optionModal?.showOptionModal,
            }))(TopicSearch)}
            options={{tabBarLabel: "Topics"}}
          />
          <Tab.Screen
            name="TrainerSearch"
            component={connect((state) => ({
              //test: "abc",
              showProfileInfoModal: this.profileInfoModal?.showProfileInfoModal,
              showOptionModal: this.optionModal?.showOptionModal,
            }))(TrainerSearch)}
            options={{tabBarLabel: "Trainers"}}
          />
        </Tab.Navigator>
        <FloatingButtonAction />
      </>
      //</NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.primary,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  searchContainer: {
    zIndex: 0,
    backgroundColor: colors.primary,
    width: screen.width,
    overflow: "hidden",
    paddingBottom: 15,
    paddingTop: 20,
  },
  searchInput: {
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 3,
    height: 45,
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  inputText: {
    marginTop: 9,
    marginLeft: 43,
    fontSize: 15,
    color: "#999",
  },
  searchIcon: {
    position: "absolute",
    left: 13,
    top: 12,
  },
});

export default TabView;
