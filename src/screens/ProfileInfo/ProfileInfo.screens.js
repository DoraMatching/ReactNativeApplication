import React, {Component} from "react";
import {View, Text, Image} from "react-native";

import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";

import colors from "../../themes/color";
import {storage} from "../../helpers/asyncStorage";
import TabView from "./ProfileInfo.routers";

import BlogDetailModal from "../BlogDetail/BlogDetail.modals";

import BlogFormEditModal from "../BlogFormEdit/BlogFormEdit.modals";

import OptionModal from "../../helpers/optionModal";

import QuestionFormEditModal from "../QuestionFormEdit/QuestionFormEdit.modals";

import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";

import ClassDetailModal from "../ClassDetail/ClassDetail.modals";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classDetailModal: null,
    };
    this.props.onFetchUser({id: this.props.id, token: this.props.token});

    this.blogDetailModal = null;

    this.setBlogDetailModalRef = (element) => {
      this.blogDetailModal = element;
    };

    this.questionDetailModal = null;

    this.setQuestionDetailModalRef = (element) => {
      this.questionDetailModal = element;
    };

    this.blogFormEditModal = null;

    this.setBlogFormEditModalRef = (element) => {
      this.blogFormEditModal = element;
    };

    this.optionModal = null;

    this.setOptionModalRef = (element) => {
      this.optionModal = element;
    };

    this.questionFormEditModal = null;

    this.setQuestionFormEditModalRef = (element) => {
      this.questionFormEditModal = element;
    };

    //this.classDetailModal = null;

    this.setClassDetailModalRef = (element) => {
      //console.log("class detail", element);
      //this.classDetailModal = element;
      this.setState({classDetailModal: element});
    };
  }

  render() {
    //console.log("profile screen");
    if (!this.props.data) return <></>;

    // this.props.onGetOptionModal(
    //   this.optionModal ? this.optionModal.showOptionModal : () => {},
    // );
    //console.log("profilescreen", this.props.data);
    const {
      username,
      email,
      avatarUrl,
      roles,
      posts,
      questions,
      id,
    } = this.props.data;

    return (
      <SafeAreaView
        style={{
          flex: 1,
          //justifyContent: "space-between",
          //alignItems: "center",
          padding: 20,
        }}>
        <View style={{alignSelf: "flex-start", marginTop: 40}}>
          <View
            style={{
              ...styles.horizontalLayout,
              justifyContent: "space-between",
            }}>
            <Image
              style={styles.avatar}
              resizeMode="cover"
              source={{
                uri: avatarUrl,
              }}
            />
            <View
              style={{
                paddingRight: 10,
              }}>
              <Text style={styles.username} numberOfLines={1}>
                {username}
              </Text>
              <Text style={styles.email}>{email}</Text>
            </View>
          </View>
          <Text style={styles.role}>{roles.join(" - ")}</Text>
        </View>

        <TabView
          style={{marginVertical: 5}}
          showBlogDetailModal={this.blogDetailModal?.showBlogDetailModal}
          showQuestionDetailModal={
            this.questionDetailModal?.showQuestionDetailModal
          }
          UserID = {id}></TabView>

        <BlogDetailModal ref={this.setBlogDetailModalRef}></BlogDetailModal>
        <BlogFormEditModal
          ref={this.setBlogFormEditModalRef}></BlogFormEditModal>
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
        <QuestionDetailModal
          ref={this.setQuestionDetailModalRef}></QuestionDetailModal>
        <QuestionFormEditModal
          ref={this.setQuestionFormEditModalRef}></QuestionFormEditModal>
        <ClassDetailModal ref={this.setClassDetailModalRef}></ClassDetailModal>
        {/* {console.log(
          "this.state.classDetailModal: ",
          this.state.classDetailModal,
        )} */}
        {this.state.classDetailModal
          ? this.props.onOpenClassDetail(
              this.state.classDetailModal.showClassDetailModal,
            )
          : () => {}}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    marginRight: 10,
    borderColor: "#c4c4c4",
    borderWidth: 0.5,
  },
  username: {
    fontWeight: "bold",
    fontSize: 23,
  },
  email: {
    fontSize: 13,
  },
  role: {
    marginTop: 5,
    fontWeight: "bold",
  },
  offerTrainer: {
    fontSize: 12,
  },
  signUpTrainer: {
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    color: "white",
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 13,
    borderRadius: 5,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
});
