import React, {Component} from "react";
import Modal from "react-native-modalbox";
import {View, StyleSheet, Dimensions, Pressable} from "react-native";

import CloseOutline from "../../images/close-outline.svg";

import ProfileInfo from "./ProfileInfo.container";

import BlogDetailModal from "../BlogDetail/BlogDetail.modals";

import BlogFormEditModal from "../BlogFormEdit/BlogFormEdit.modals";

import OptionModal from "../../helpers/optionModal";

import QuestionFormEditModal from "../QuestionFormEdit/QuestionFormEdit.modals";

import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";

import ClassDetailModal from "../ClassDetail/ClassDetail.modals";

var screen = Dimensions.get("window");
export default class ProfileInfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.profileInfoModal = null;

    this.setProfileInfoModalRef = (element) => {
      this.profileInfoModal = element;
    };

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
  id;
  showProfileInfoModal = (id) => {
    this.id = id;
    this.setState({isOpen: true});
  };

  onOpen = () => {
    this.setState({isOpen: true});
  };

  onClose = () => {
    this.setState({isOpen: false});
  };
  render() {
    return (
      <Modal
        ref={this.setProfileInfoModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
        <View style={{flexDirection: "column", flex: 1, marginBottom: 5}}>
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
          <ProfileInfo id={this.id}
          showQuestionDetailModal = {this.questionDetailModal?.showQuestionDetailModal}
          showBlogDetailModal={this.blogDetailModal?.showBlogDetailModal}
          showClassDetailModal={this.state.classDetailModal?.showClassDetailModal}
          ></ProfileInfo>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              position: "absolute",
              right: 5,
              top: 0,
              width: "100%",
              backgroundColor: "rgb(255,255,255)",
              borderBottomColor: "rgba(0,0,0,0.5)",
              borderBottomWidth: 0.3,
            }}>
            <Pressable
              style={{margin: 5}}
              onPress={() => this.setState({isOpen: false})}>
              <CloseOutline width={30} height={30} fill={"black"} />
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({});
