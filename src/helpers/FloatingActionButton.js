import React, {useState} from "react";
import {connect} from "react-redux";
import {FloatingAction} from "react-native-floating-action";
import BlogFormModal from "../screens/BlogForm/BlogForm.modals";
import QuestionFormModal from "../screens/QuestionForm/QuestionForm.modals";
import ClassFormModal from "../screens/ClassForm/ClassForm.modals";
import TopicFormModal from "../screens/TopicForm/TopicForm.modals";
const FloatingButton = (props) => {
  const [blogFormModal, setBlogFormModalRef] = useState(null);
  const [questionFormModal, setQuestionFormModalRef] = useState(null);
  const [classFormModal, setClassFormModalRef] = useState(null);
  const [topicFormModal, setTopicFormModalRef] = useState(null);
  const actions = [
    {
      text: "Create your question",
      //icon: require("../../images/book.svg"),
      name: "bt_create_question",
      position: 1,
    },
    {
      text: "Create your blog",
      //icon: require("../../images/book.svg"),
      name: "bt_create_blog",
      position: 2,
    },
    {
      text: "Create your classroom",
      //icon: require("../../images/book.svg"),
      name: "bt_create_classroom",
      position: 3,
    },
    {
      text: "Create your topic",
      //icon: require("../../images/book.svg"),
      name: "bt_create_topic",
      position: 4,
    },
  ];
  const actionsTrainee = [
    {
      text: "Create your question",
      //icon: require("../../images/book.svg"),
      name: "bt_create_question",
      position: 1,
    },
    {
      text: "Create your blog",
      //icon: require("../../images/book.svg"),
      name: "bt_create_blog",
      position: 2,
    },
   
  ];
  return (
    <>
      <FloatingAction
        actions={props.roles.findIndex((item) => item === "TRAINER") !== -1 ? actions : actionsTrainee}
        style={{marginBottom: 20}}
        onPressItem={(name) => {
          if (name === "bt_create_blog") blogFormModal.showBlogFormModal();
          if (name === "bt_create_question") questionFormModal.showQuestionFormModal();
          if (name === "bt_create_classroom") classFormModal.showClassFormModal();
          if (name === "bt_create_topic") topicFormModal.showTopicFormModal();
        }}
      />
      <BlogFormModal ref={setBlogFormModalRef}></BlogFormModal>
      <QuestionFormModal ref={setQuestionFormModalRef}></QuestionFormModal>
      <ClassFormModal ref={setClassFormModalRef}></ClassFormModal>
      <TopicFormModal ref={setTopicFormModalRef}></TopicFormModal>
    </>
  );
};
const mapStateToProps = (state) => ({
  roles: !state.UserLoginReducer ? [] : state.UserLoginReducer.roles,
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FloatingButton);

