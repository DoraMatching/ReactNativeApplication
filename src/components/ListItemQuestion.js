import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View, Pressable} from "react-native";
import Svg, {Line} from "react-native-svg";
import TimeAgo from "react-native-timeago";
import likedIcon from "../images/LikedIcon.png";
import unlikedIcon from "../images/UnlikedIcon.png";
import TagListItem from "./ListItemTag";
import MoreOptionIcon from "../images/moreOption.svg";

export default class ListItemBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  render() {
    const {id, title, author, createdAt, tags, content, comments} = this.props.item;
    var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;
    var paramsForOptionModal = {
      type : "question",
      id : id,
      token : this.props.token,
      title : title,
      //subTitle : this.props.subTitle,
      content : content,
      status : true,
      tags : tags,
  };
    //console.log("listItemQuestion: ", this.props.userID);
    
    return (
      <View>
        <View style={{...styles.container, ...styles.verticalLayout}}>
          <View
            style={{
              ...styles.horizontalLayout,
              justifyContent: "space-between",
            }}>
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

            <View
              style={{
                ...styles.verticalLayout,
                paddingRight: 10,
                flex: 60,
              }}>
              <Text style={{...styles.title}} numberOfLines={2}>
                {title}
              </Text>
              <TimeAgo time={createdAt} style={{...styles.time}} />

              <View
                style={{
                  ...styles.horizontalLayout,
                  marginBottom: 0,
                  flexWrap: "wrap",
                }}>
                {tags.map((item) => {
                  return <TagListItem item={item} />;
                })}
              </View>
            </View>
            <View>
              <Image
                style={{width: 18, height: 20}}
                resizeMode="cover"
                source={require("../images/QuestionIcon.png")}
              />
              {this.props.userID === author.id ? (
                <Pressable onPress={() => this.props.showOptionModal(paramsForOptionModal)}>
                <MoreOptionIcon width={20} height={20} style={{marginTop: 5}} />
                </Pressable>
              ) : (
                <></>
              )}
            </View>
          </View>

          <Text style={styles.descriptionText}>
            {content.length > 200
              ? content.substring(0, 200 - 3) + "..."
              : content}
            <Text style={{...styles.authorLabel}}> asked by </Text>
            <Text style={{fontWeight: "bold"}}>
              {author ? author.name : "ABC"}
            </Text>
          </Text>
          <Svg
            width="100%"
            height="2"
            style={{marginTop: 10, marginEnd: 10, marginBottom: 5}}>
            <Line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="black"
              strokeWidth="1"
            />
          </Svg>
          <View
            style={{
              ...styles.horizontalLayout,
              justifyContent: "space-around",
            }}>
            <TouchableOpacity
              style={{...styles.horizontalLayout, alignItems: "center"}}
              onPress={() => this.setState({isLiked: !this.state.isLiked})}>
              <Image
                style={{width: 25, height: 25, marginEnd: 2}}
                source={imgSrc}
              />
              <Text style={{fontSize: 13, paddingTop: 5}}>25 likes</Text>
            </TouchableOpacity>
            <View style={{...styles.horizontalLayout, marginTop: 5}}>
              <Image
                style={{width: 20, height: 20, marginEnd: 5}}
                source={require("../images/CommentIcon.png")}
              />
              <Text
                style={{
                  fontSize: 13,
                  alignSelf: "flex-end",
                  textAlign: "right",
                }}>
                {comments.length} comments
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  verticalLayout: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
    marginRight: 0,
  },
  time: {
    fontSize: 12,

    paddingEnd: 5,
    marginBottom: 5,
    color: "#3d3d4e",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionText: {
    marginTop: 10,
    color: "#000",
  },
  authorLabel: {
    fontWeight: "200",
    fontStyle: "italic",
  },
});
