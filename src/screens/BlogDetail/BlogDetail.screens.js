import React, {Component} from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../../themes/color";

import moment from "moment";
import TagListItem from "../../components/ListItemTag";
import Comment from "../../components/Comment";

import likedIcon from "../../images/LikedIcon.png";
import unlikedIcon from "../../images/UnlikedIcon.png";

import SendButton from "../../images/send-button.svg";

import ScaledImage from "../../components/ScaledImage";

import Modal from "react-native-modalbox";
import Button from "react-native-button";

import {AutoGrowingTextInput} from "react-native-autogrow-textinput";

var screen = Dimensions.get("window");
export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      comment: "",
      isOpen: false,
      isCreated: true,
      commentID: "",
    };
    console.log("navigation Modal", this.props.navigation);
    this.commentTextInput = null;

    this.setCommentTextInputRef = (element) => {
      this.commentTextInput = element;
    };

    this.scrollView = null;

    this.setScrolllViewRef = (element) => {
      this.scrollView = element;
    };
  }

  updateComment = (comment) => {
    this.setState({comment});
  };

  showBlogDetailModal = (item) => {
    //console.log("blog detail modal", item);
    this.setData(item);
    //this.blogDetailModal.open();
    this.setState({isOpen: true});
    //console.log("blog detail modal tags", this.tags);
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
    const sampleUrl = "https://www.w3schools.com/w3images/avatar2.png";
   
    const {
      id,
      author,
      comments,
      content,
      createdAt,
      featuredImage,
      subTitle,
      tags,
      title,
      updatedAt,
    } = this.props.blog;
    console.log("BlogDetailScreen: ", this.props.blog);
   
    return (
      <>
        
          <ScrollView style={styles.container} ref={this.setScrolllViewRef}>
            <View style={{}}>
              <Text style={{...styles.title}}>{title}</Text>
              <View
                style={{
                  ...styles.horizontalLayout,
                  marginVertical: 5,
                  flexWrap: "wrap",
                }}>
                {tags ? (
                  tags.map((item) => {
                    return <TagListItem item={item} />;
                  })
                ) : (
                  <></>
                )}
              </View>
              <View
                style={{
                  ...styles.horizontalLayout,
                  alignItems: "center",
                  marginVertical: 5,
                }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 1000,
                    borderColor: "#c4c4c4",
                    borderWidth: 0.5,
                  }}
                  resizeMode="cover"
                  source={{
                    uri: !this.author ? sampleUrl : author.avatarUrl,
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{...styles.author}}>
                    {!author ? "" : author.name}
                  </Text>
                  <Text style={{...styles.time}}>
                    created on {moment(createdAt).format("llll")}
                  </Text>
                </View>
              </View>
              <Text style={{...styles.description}}>{subTitle}</Text>
              <ScaledImage
                {...{
                  uri: featuredImage,
                  width: screen.width - styles.container.paddingHorizontal * 2,
                }}
              />
              {/* <Image
                  style={{
                    width: screen.width,
                    height: 60,
                    alignSelf: "stretch",
                    marginVertical: 5,
                  }}
                  resizeMode="cover"
                  source={{
                    uri: this.featuredImage,
                  }}
                /> */}
              <Text style={{...styles.content}}>{content}</Text>
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
                <Text
                  style={{fontSize: 15, paddingLeft: 5, fontWeight: "bold"}}>
                  25 people liked this blog
                </Text>
              </TouchableOpacity>
              <Text
                style={{fontWeight: "bold", fontSize: 20, marginVertical: 5}}>
                Comments ({this.props.comments.length})
              </Text>
              <View>
                {this.props.comments.map((item) => (
                  
                    <Comment
                      {...{...item, userID: this.props.userID, onEditComment : this.onEditComment}}></Comment>
                  
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
                this.props.onCreateBlogComment({
                  id,
                  content: this.state.comment,
                  token: this.props.token,
                });
              else {
                this.props.onEditBlogComment({
                  blogID: id,
                  content: this.state.comment,
                  commentID: this.state.commentID,
                  token: this.props.token,
                });
                this.setState({isCreated: true});
              }
              Keyboard.dismiss();
              this.scrollView.scrollToEnd();
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
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",

    marginTop: 30,
    marginBottom: 60,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 5,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  author: {
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,

    paddingEnd: 5,
    marginBottom: 5,
    color: "#3d3d4e",
  },
  description: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  featuredImage: {},
  content: {
    marginVertical: 5,
  },
  textInput: {
    //borderColor: "#000000",
    //borderWidth: 0.5,
    flex: 80,
    borderRadius: 5,
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

  sendButton: {
    flex: 20,
    marginLeft: 5,
    //bottom: 0,
  },

  modal: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "transparent",
  },
});
