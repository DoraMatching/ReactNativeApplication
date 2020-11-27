import React, {Component} from "react";
import "react-native-gesture-handler";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import BlogSearch from "../BlogSearch/BlogSearch.container";
import QuestionSearch from "../QuestionSearch/QuestionSearch.container";
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

import BlogDetailModal from "../BlogDetail/BlogDetail.modals";
import BlogFormEditModal from "../BlogFormEdit/BlogFormEdit.modals";
import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";
import QuestionFormEditModal from "../QuestionFormEdit/QuestionFormEdit.modals";
import OptionModal from "../../helpers/optionModal";

import {connect} from "react-redux";

const Tab = createMaterialTopTabNavigator();
var screen = Dimensions.get("window");
class TabView extends Component {
  constructor(props) {
    super(props);

    this.blogDetailModal = null;

    this.setBlogDetailModalRef = (element) => {
      this.blogDetailModal = element;
    };

    this.blogFormEditModal = null;

    this.setBlogFormEditModalRef = (element) => {
      this.blogFormEditModal = element;
    };

    this.questionDetailModal = null;

    this.setQuestionDetailModalRef = (element) => {
      this.questionDetailModal = element;
    };

    this.questionFormEditModal = null;

    this.setQuestionFormEditModalRef = (element) => {
      this.questionFormEditModal = element;
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
        <BlogDetailModal ref={this.setBlogDetailModalRef}></BlogDetailModal>
        <BlogFormEditModal
          ref={this.setBlogFormEditModalRef}></BlogFormEditModal>
        <QuestionDetailModal
          ref={this.setQuestionDetailModalRef}></QuestionDetailModal>
        <QuestionFormEditModal
          ref={this.setQuestionFormEditModalRef}></QuestionFormEditModal>
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
              ref={(inputSearch) => {
                this.inputSearch = inputSearch;
              }}
            />
          </View>
        </View>
        <Tab.Navigator
          initialRouteName="MyBlog"
          tabBarOptions={{
            activeTintColor: "#606770",
            labelStyle: {fontSize: 12, fontWeight: "bold"},
            //style: {backgroundColor: "powderblue"},
            indicatorStyle: {backgroundColor: colors.primary},
            //scrollEnabled: true,
          }}>
          <Tab.Screen
            name="MyBlog"
            component={connect((state) => ({
              //test: "abc",
              showBlogDetailModal: this.blogDetailModal?.showBlogDetailModal,
              showOptionModal: this.optionModal?.showOptionModal,
            }))(BlogSearch)}
            options={{tabBarLabel: "Blogs"}}
          />
          <Tab.Screen
            name="MyQuestion"
            component={connect((state) => ({
                //test: "abc",
                showQuestionDetailModal: this.questionDetailModal?.showQuestionDetailModal,
                showOptionModal: this.optionModal?.showOptionModal,
              }))(QuestionSearch)}
            options={{tabBarLabel: "Questions"}}
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
