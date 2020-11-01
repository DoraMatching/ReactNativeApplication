import React, {Component} from "react";
import Modal from "react-native-modalbox";
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
} from "react-native";
import TagListItem from "../../components/ListItemTag";
import Comment from "../../components/Comment";

import likedIcon from "../../images/LikedIcon.png";
import unlikedIcon from "../../images/UnlikedIcon.png";
import CloseOutline from "../../images/close-outline.svg";

var screen = Dimensions.get("window");
export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      isOpen: false,
    };
    this.blogDetailModal = null;

    this.setBlogDetailModalRef = (element) => {
      this.blogDetailModal = element;
    };
  }

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
    console.log("blog detail modal", item);
    this.author = item.author;
    this.comments = item.comments;
    this.content = item.content;
    this.createdAt = item.createdAt;
    this.featuredImage = item.featuredImage;
    this.subTitle = item.subTitle;
    this.tags = item.tags;
    this.title = item.title;
    this.updatedAt = item.updatedAt;
    //this.blogDetailModal.open();
    this.setState({isOpen: true});
    console.log("blog detail modal tags", this.tags);
  };

  onOpen = () => {
    this.setState({isOpen: true});
  };

  onClose = () => {
    this.setState({isOpen: false});
  };
  render() {
    var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;
    const sampleUrl = "https://www.w3schools.com/w3images/avatar2.png";

    return (
      <Modal
        ref={this.setBlogDetailModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
        <View>
         
          <ScrollView >
            <View style={{...styles.container}}>
              <Text style={{...styles.title}}>{this.title}</Text>
              <View
                style={{
                  ...styles.horizontalLayout,
                  marginVertical: 5,
                  flexWrap: "wrap",
                }}>
                {this.tags ? (
                  this.tags.map((item) => {
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
                    uri: !this.author ? sampleUrl : this.author.avatarUrl,
                  }}
                />
                <Text style={{marginLeft: 10}}>
                  Written by{" "}
                  <Text style={{...styles.author}}>
                    {!this.author ? "" : this.author.name}
                  </Text>{" "}
                  on <Text>{this.createdAt}</Text>
                </Text>
              </View>
              <Text style={{...styles.description}}>{this.subTitle}</Text>
              <Image
                style={{width: "100%", height: 300, marginVertical: 5}}
                resizeMode="cover"
                source={{
                  uri: this.featuredImage,
                }}
              />
              <Text style={{...styles.content}}>{this.content}</Text>
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
                Comments (2)
              </Text>
              <Comment></Comment>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              position: "absolute",
              right: 5,
              top: 0,
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
    marginBottom: 150,
    marginTop: 20,
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
  date: {},
  description: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  featuredImage: {},
  content: {
    marginVertical: 5,
  },
});
