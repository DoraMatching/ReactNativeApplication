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

import BlogDetail from './BlogDetail.container';

var screen = Dimensions.get("window");
export default class BlogDetailModal extends Component {
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
    //console.log("navigation Modal", this.props.navigation);
    //this.props.navigation.setOptions({tabBarVisible : false});
  }
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
  onOpen = () => {
    this.setState({isOpen: true});
  };

  onClose = () => {
    this.setState({isOpen: false});
  };
  render() {
    var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;
    const sampleUrl = "https://www.w3schools.com/w3images/avatar2.png";
    const flexTop = 95;
    const flexBottom = 5;
    //console.log("BlogDetail: ", this.props.blog);
    return (
      
      <Modal
        ref={this.setBlogDetailModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
          <View style={{flexDirection: "column", flex: 1,marginBottom: 5}}>
          <BlogDetail id ={this.id}></BlogDetail>
          <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                position: "absolute",
                right: 5,
                top: 0,
                width: '100%',
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
