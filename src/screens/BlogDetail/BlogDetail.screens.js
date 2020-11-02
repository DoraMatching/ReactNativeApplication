import React, {Component} from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import TagListItem from "../../components/ListItemTag";
import Comment from "../../components/Comment";

import likedIcon from "../../images/LikedIcon.png";
import unlikedIcon from "../../images/UnlikedIcon.png";
import CloseOutline from "../../images/close-outline.svg";

import ScaledImage from "../../components/ScaledImage";

var screen = Dimensions.get("window");
export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      comment: "",
    };
    console.log("navigation Modal", this.props.navigation);
  }

  updateComment = (comment) => {
    this.setState({comment});
  };

  id;
  author;
  comments;
  content;
  createdAt;
  featuredImage;
  subTitle;
  tags;
  title;
  updatedAt;
  item;

  showBlogDetailModal = (item) => {
    //console.log("blog detail modal", item);
    this.setData(item);
    //this.blogDetailModal.open();
    this.setState({isOpen: true});
    //console.log("blog detail modal tags", this.tags);
  };

  setData = (item) => {
    this.id = item.id;
    this.author = item.author;
    this.comments = item.comments;
    this.content = item.content;
    this.createdAt = item.createdAt;
    this.featuredImage = item.featuredImage;
    this.subTitle = item.subTitle;
    this.tags = item.tags;
    this.title = item.title;
    this.updatedAt = item.updatedAt;
  };

  render() {
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
                {
                  this.props.blog.comments.map(item => (<Comment {...item}></Comment>))
                }
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flex: flexBottom,
            flexDirection: "row",
            borderColor: "#000000",
            borderWidth: 1,
            zIndex: 18,
            bottom: 0,
            marginBottom: 10,
          }}>
          <TextInput
            multiline
            numberOfLines={6}
            editable
            style={{
              borderColor: "#000000",
              borderWidth: 1,
              flex: 80,

              backgroundColor: "white",
            }}
            placeholder="Type Here..."
            onChangeText={this.updateComment}
            value={this.state.comment}
          />
          <Button
            title="Post"
            style={{flex: 20, height: 20}}
            onPress={() => {this.props.onCreateBlogComment({id, content : this.state.comment, token: this.props.token})
                              this.setState({isOpen : false});
                              this.setState({isOpen: true})}}></Button>
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
});
