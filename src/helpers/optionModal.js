import React, {Component} from "react";
import {Text, View, StyleSheet, Pressable, Alert} from "react-native";
import Modal from "react-native-modalbox";
import Icon from "react-native-vector-icons/Ionicons";

import {connect} from "react-redux";
import BlogSearchActions from "../screens/BlogSearch/BlogSearch.actions";
import QuestionSearchActions from "../screens/QuestionSearch/QuestionSearch.actions";
import BlogFormEditActions from "../screens/BlogFormEdit/BlogFormEdit.actions";
import QuestionFormEditActions from "../screens/QuestionFormEdit/QuestionFormEdit.actions";
//import BlogFormModal from '../screens/BlogFormEdit/BlogFormEdit.modals'
//import BlogFormEditModal from "../screens/BlogFormEdit/BlogFormEdit.modals";

class option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  deletePost = () => {
    const {id, token, type} = this.props.params;
    Alert.alert(
      "",
      "Are you SURE you want to DELETE the selected post?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            type === "blog"
              ? this.props.onDeleteBlog({id, token})
              : this.props.onDeleteQuestion({id, token}),
        },
      ],
      {cancelable: false},
    );
    // type === "blog" ? this.props.onDeleteBlog({id, token})
    //             : this.props.onDeleteQuestion({id, token});
  };

  editPost = () => {
    const {id, token, type, title, subTitle, content} = this.props.params;

    if (type === "blog") {
      //this.props.onEditBlog(this.props.params);
      this.props.onOpenBlogEditForm({id, token});
      this.props.onClose();
      return;
    }
    //this.props.onEditQuestion(this.props.params);
    this.props.onOpenQuestionEditForm({id, token});
    this.props.onClose();
  };

  render() {
    return (
      <>
        <Pressable style={styles.layout} onPress={() => this.editPost()}>
          <View style={styles.layout}>
            <Icon name="pencil" size={30} color="#606770" />
            <Text style={styles.text}>Edit your post</Text>
          </View>
        </Pressable>
        <Pressable style={styles.layout} onPress={() => this.deletePost()}>
          <View style={styles.layout}>
            <Icon name="close" size={30} color="#606770" />
            <Text style={styles.text}>Delete your post</Text>
          </View>
        </Pressable>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteBlog: (params) => {
      dispatch(BlogSearchActions.deleteBlogAction(params));
    },
    onDeleteQuestion: (params) => {
      dispatch(QuestionSearchActions.deleteQuestionAction(params));
    },
    // onEditBlog: (params) => {
    //   dispatch(BlogFormEditActions.editBlogAction(params));
    // },
    onEditQuestion: (params) => {
      dispatch(QuestionFormEditActions.editQuestionAction(params));
    },
  };
};

const OptionContainer = connect(mapStateToProps, mapDispatchToProps)(option);

export default class optionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.optionModal = null;

    this.optionModalRef = (element) => {
      this.optionModal = element;
    };

    this.blogFormEditModal = null;

    this.setBlogFormEditModalRef = (element) => {
      this.blogFormEditModal = element;
    };

    //this.props.navigation.setOptions({tabBarVisible : false});
  }
  params;

  showOptionModal = (params) => {
    //console.log("blog detail modal", item);
    this.params = params;
    //this.blogDetailModal.open();
    this.setState({isOpen: true});
    //console.log("blog detail modal tags", this.tags);
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
        style={[styles.modal, styles.modal4]}
        position={"bottom"}
        ref={this.setBlogFormModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
        <OptionContainer
          params={this.params}
          onOpenEditForm={
            this.props.onOpenEditForm ? this.props.onOpenEditForm : () => {}
          }
          onOpenBlogEditForm={
            this.props.onOpenBlogEditForm ? this.props.onOpenBlogEditForm : () => {}
          }
          onOpenQuestionEditForm={
            this.props.onOpenQuestionEditForm ? this.props.onOpenQuestionEditForm : () => {}
          }
          onClose={this.onClose}></OptionContainer>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modal4: {
    height: 150,
  },
  layout: {
    width: "100%",
    //borderColor: 'black',
    //borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    marginLeft: 10,
  },
});
