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

import ScaledImage from "../../components/ScaledImage";

import Modal from "react-native-modalbox";
import Button from "react-native-button";

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
    const flexTop = 95;
    const flexBottom = 5;
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
    const onEditComment = (content, commentID, authorID) => {
      console.log("author", author.id);
      console.log("userID", this.props.userID);
      if (this.props.userID !== authorID) return;
      this.setState({
        comment: content,
        isOpen: true,
        isCreated: false,
        commentID: commentID,
      });
    };
    return (
      <>
        <View style={{flex: flexTop}}>
          <ScrollView>
            <View style={{...styles.container}}>
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
                Comments ({comments.length})
              </Text>
              <View>
                {this.props.blog.comments.map((item) => (
                  <Pressable
                    onPress={() =>
                      onEditComment(item.content, item.id, item.author.id)
                    }>
                    <Comment
                      {...{...item, userID: this.props.userID}}></Comment>
                  </Pressable>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flex: flexBottom,
            flexDirection: "row",
            borderColor: "rgba(0,0,0,0.2)",
            borderWidth: 1,
            borderRadius: 5,
            bottom: 0,
            marginBottom: 0,
            marginHorizontal: 20,
          }}>
          <TextInput
            multiline
            numberOfLines={6}
            editable
            style={{
              borderColor: "#000000",
              borderWidth: 0.5,
              flex: 80,
              borderRadius: 5,
              backgroundColor: "white",
            }}
            placeholder="Leave your comment here..."
            // onChangeText={this.updateComment}
            value={this.state.comment}
            onFocus={() => {
              Keyboard.dismiss();
              this.setState({isOpen: true});
            }}
          />
        </View>
        <Modal
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({isOpen: false})}
          style={[styles.modal, {height: 300}]}
          position={"center"}
          backdropPressToClose={false}
          backdropContent={BContent}>
          <Pressable onPress={Keyboard.dismiss}>
            <>
              <TextInput
                multiline
                numberOfLines={6}
                editable
                style={{
                  borderColor: "#000000",
                  borderWidth: 0.5,
                  borderRadius: 5,
                  width: screen.width - styles.container.paddingHorizontal * 2,
                  marginLeft: 20,
                  backgroundColor: "white",
                }}
                placeholder="Leave your comment here..."
                onChangeText={this.updateComment}
                value={this.state.comment}
              />
              <View
                style={{
                  marginVertical: 10,
                  marginLeft: 20,
                  //padding: 5,
                  borderRadius: 5,
                  borderColor: "#f7f7f7",
                  borderWidth: 0.75,
                }}>
                <Button
                  style={{
                    // marginVertical: 10,
                    // marginLeft: 20,
                    backgroundColor: colors.primary,
                    padding: 5,
                    color: "white",
                    fontSize: 13,
                    borderRadius: 5,
                  }}
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
                    this.setState({comment: "", commentID: ""});
                    this.setState({isOpen: false});
                  }}>
                  Send your comment
                </Button>
              </View>
            </>
          </Pressable>
        </Modal>
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
