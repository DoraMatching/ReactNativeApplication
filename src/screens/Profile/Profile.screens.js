import React, {Component} from "react";
import {View, Text, Image} from "react-native";

import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import Button from "react-native-button";
import {FloatingAction} from "react-native-floating-action";
import profile from "../../data/profile";
import colors from "../../themes/color";
import {storage} from "../../helpers/asyncStorage";
import TabView from "./Profile.routers";
import FloatingButtonAction from "../../helpers/FloatingActionButton";

import BlogDetailModal from "../BlogDetail/BlogDetail.modals";

import BlogFormEditModal from "../BlogFormEdit/BlogFormEdit.modals";

import OptionModal from "../../helpers/optionModal";

import QuestionFormEditModal from "../QuestionFormEdit/QuestionFormEdit.modals";

import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";

import TrainerRegisterModal from '../TrainerRegister/TrainerRegister.modals';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    this.trainerRegisterModal = null;

    this.setTrainerRegisterModalRef = (element) => {
      this.trainerRegisterModal = element;
    };
  }

  signOut = () => {
    //await storage.removeData((error) => {});
    this.props.navigation.navigate("Login");
  };

  render() {
    console.log("profile screen");
    if (!this.props.data) return <></>;

    this.props.onGetOptionModal(
      this.optionModal ? this.optionModal.showOptionModal : () => {},
    );
    console.log("profilescreen", this.props.data);
    const {
      username,
      email,
      avatarUrl,
      roles,
      posts,
      questions,
    } = this.props.data;
  
    return (
      <SafeAreaView
        style={{
          flex: 1,
          //justifyContent: "space-between",
          //alignItems: "center",
          padding: 20,
        }}>
        <View style={{alignSelf: "flex-start"}}>
          
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
          {roles.findIndex((item) => item === "TRAINER") === -1 ? (
            <Text style={styles.offerTrainer}>
              Do you want to be a trainer?{" "}
              <Text style={styles.signUpTrainer} onPress={() => this.trainerRegisterModal.showTrainerRegisterModal()}>Sign up</Text>
            </Text>
          ) : (
            <></>
          )}
          <View style={[styles.horizontalLayout, {marginVertical: 5}]}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("ProfileEdit")}>
              Change
            </Button>
            <Button
              onPress={this.signOut}
              style={[styles.button, {marginLeft: 5}]}>
              Sign out
            </Button>
          </View>
        </View>

        <TabView style={{marginVertical: 5}}></TabView>
        {/* <FloatingAction
          actions={actions}
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
          }}
          style={{zIndex : 5}}
        /> */}
        <FloatingButtonAction />
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
          <TrainerRegisterModal
          ref={this.setTrainerRegisterModalRef}></TrainerRegisterModal>
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
