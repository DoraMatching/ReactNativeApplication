import React, {Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import TagListItem from "../../components/ListItemTag";
import colors from "../../themes/color";
import Comment from "../../components/Comment";
import likedIcon from "../../images/LikedIcon.png";
import unlikedIcon from "../../images/UnlikedIcon.png";

import Modal from "react-native-modalbox";
import Button from "react-native-button";
import moment from "moment";

import {AutoGrowingTextInput} from "react-native-autogrow-textinput";
import SendButton from "../../images/send-button.svg";

import Markdown from "../../components/MarkdownContent";

var screen = Dimensions.get("window");

export default class QuestionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      comment: "",
      isOpen: false,
      isCreated: true,
      commentID: "",
    };
    this.commentTextInput = null;

    this.setCommentTextInputRef = (element) => {
      this.commentTextInput = element;
    };

    this.props.onFetchQuestionDetail({id : this.props.id , token : this.props.token});
  }
  updateComment = (comment) => {
    this.setState({comment});
  };

  onEditComment = (content, commentID, authorID) => {
    // console.log("author", author.id);
    //console.log("userID", this.props.userID);
    if (this.props.userID !== authorID) return;
    this.commentTextInput.focus();
    this.setState({
      comment: content,
      isOpen: true,
      isCreated: false,
      commentID: commentID,
    });
  };

  render() {
    var BContent = (
      <View style={[styles.btn, styles.btnModal]}>
        <Button
          style={{color: "white", fontSize: 40}}
          onPress={() => this.setState({isOpen: false})}>
          X
        </Button>
      </View>
    );

    var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;

    console.log("questiondetail", this.props.question);
    if (!this.props.question) return <></>;
    const {
      id,
      author,
      comments,
      content,
      createdAt,
      tags,
      title,
      updatedAt,
    } = this.props.question;

    return (
      <>
        <ScrollView style={{...styles.container}}>
          <View style={{}}>
            <View style={{...styles.horizontalLayout, marginTop: 20}}>
              <Image
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 1000,
                  marginRight: 10,
                  borderColor: "#c4c4c4",
                  borderWidth: 0.5,
                }}
                resizeMode="cover"
                source={{
                  uri: author.avatarUrl,
                }}
              />
              <View>
                <Text style={{...styles.username}}>{author.name}</Text>
                <Text style={{...styles.time}}>
                  Asked {moment(createdAt).format("llll")}
                </Text>
              </View>
            </View>
            <Text style={{...styles.title}}>{title}</Text>

            {/* <Text style={{...styles.content}}>{content}</Text> */}
            <View style={{...styles.content}}>
              <Markdown content={content}></Markdown>
            </View>

            <View style={{...styles.horizontalLayout}}>
              {tags?.map((item) => {
                return <TagListItem item={item} />;
              })}
            </View>
            <TouchableOpacity
              style={{
                ...styles.horizontalLayout,
                alignItems: "flex-end",
                marginVertical: 5,
              }}
              onPress={() => this.setState({isLiked: !this.state.isLiked})}>
              <Image
                style={{width: 30, height: 30}}
                resizeMode="cover"
                source={imgSrc}
              />
              <Text style={{fontSize: 15, paddingLeft: 5, fontWeight: "bold"}}>
                25 people liked this question
              </Text>
            </TouchableOpacity>
            <Text style={{fontWeight: "bold", fontSize: 20, marginVertical: 5}}>
              Comments ({this.props.comments?.length})
            </Text>
            <View>
              {console.log("Question comment", this.props.comments)}
              {this.props.comments.map((item) => (
                <Comment
                  {...{
                    ...item,
                    userID: this.props.userID,
                    onEditComment: this.onEditComment,
                  }}></Comment>
              ))}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            //flex: flexBottom,
            position: "absolute",
            flexDirection: "row",
            borderTopColor: "rgba(0,0,0,0.2)",
            borderTopWidth: 1,

            bottom: 0,
            marginBottom: 0,
            paddingHorizontal: 20,
            alignItems: "flex-end",
            backgroundColor: "white",
          }}>
          <AutoGrowingTextInput
            ref={this.setCommentTextInputRef}
            style={styles.textInput}
            placeholder={"Your Message"}
            onChangeText={this.updateComment}
            value={this.state.comment}
          />
          <Pressable
            onPress={() => {
              if (this.state.isCreated)
                this.props.onCreateQuestionComment({
                  id,
                  content: this.state.comment,
                  token: this.props.token,
                });
              else {
                this.props.onEditQuestionComment({
                  questionID: id,
                  content: this.state.comment,
                  commentID: this.state.commentID,
                  token: this.props.token,
                });
                this.setState({isCreated: true});
              }
              Keyboard.dismiss();
              //ScrollView.scrollToEnd();
              this.setState({comment: "", commentID: ""});
              this.setState({isOpen: false});
            }}>
            <SendButton width={20} height={40} style={styles.sendButton} />
          </Pressable>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 30,
    marginBottom: 50,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  username: {
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,

    paddingEnd: 5,
    marginBottom: 5,
    color: "#3d3d4e",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
  content: {
    padding: 10,
    backgroundColor: "#f0f2f5",
    borderRadius: 5,
    marginVertical: 5,
  },
  textInput: {
    //borderColor: "#000000",
    //borderWidth: 0.5,
    flex: 80,
    borderRadius: 5,
  },
  sendButton: {
    flex: 20,
    marginLeft: 5,
    //bottom: 0,
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10,
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent",
  },

  modal: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "transparent",
  },
});
