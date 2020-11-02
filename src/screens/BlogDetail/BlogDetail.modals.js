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
    console.log("navigation Modal", this.props.navigation);
    //this.props.navigation.setOptions({tabBarVisible : false});
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
    //console.log("blog detail modal", item);
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
    //console.log("blog detail modal tags", this.tags);
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
    
    return (
      <Modal
        ref={this.setBlogDetailModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
        {/* <KeyboardAvoidingView
          behavior="padding"
          
          >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={{flexDirection: "column", flex: 1, marginBottom: 90}}>
          <View style={{flex: flexTop}}>
            <ScrollView>
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
                  <View style={{marginLeft: 10}}>
                    <Text style={{...styles.author}}>
                      {!this.author ? "" : this.author.name}
                    </Text>
                    <Text style={{...styles.time}}>
                      created on {moment(this.createdAt).format("llll")}
                    </Text>
                  </View>
                </View>
                <Text style={{...styles.description}}>{this.subTitle}</Text>
                <ScaledImage {...{uri: this.featuredImage, width: screen.width - styles.container.paddingHorizontal*2}}/>
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
                width: screen.width,
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
          {/* <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: flexBottom, }}
          > */}
          <View
            style={{
              flex: flexBottom,
              flexDirection: "row",
              borderColor: "#000000",
              borderWidth: 1,
              zIndex: 18,
              bottom: 0,
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
            />
            <Button title="Post" style={{flex: 20, height: 20}}></Button>
          </View>
          {/* </KeyboardAvoidingView> */}
        </View>
        {/* </TouchableWithoutFeedback>
        </KeyboardAvoidingView> */}
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
