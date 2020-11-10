import React, {useState} from "react";
import {FloatingAction} from "react-native-floating-action";
import BlogFormModal from "../screens/BlogForm/BlogForm.modals";
import QuestionFormModal from "../screens/QuestionForm/QuestionForm.modals";
const FloatingButton = () => {
  const [blogFormModal, setBlogFormModalRef] = useState(null);
  const [questionFormModal, setQuestionFormModalRef] = useState(null);
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
  ];
  return (
    <>
      <FloatingAction
        actions={actions}
        style={{marginBottom: 20}}
        onPressItem={(name) => {
          if (name === "bt_create_blog") blogFormModal.showBlogFormModal();
          if (name === "bt_create_question") questionFormModal.showQuestionFormModal();
        }}
      />
      <BlogFormModal ref={setBlogFormModalRef}></BlogFormModal>
      <QuestionFormModal ref={setQuestionFormModalRef}></QuestionFormModal>
    </>
  );
};

export default FloatingButton;
