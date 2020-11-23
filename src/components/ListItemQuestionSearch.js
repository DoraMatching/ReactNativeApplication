import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import moment from "moment";
import FastImage from "react-native-fast-image";
import TagListItem from "./ListItemTag";
import MoreOptionIcon from "../images/moreOption.svg";

export default class ListItemQuestionSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.item) return <></>;
    console.log("questions: ", this.props.item);
    const {
      id,
      title,
      author,
      content,
      createdAt,
      tags,
      comments,
    } = this.props.item;
    var paramsForOptionModal = {
      type: "question",
      id: id,
      token: this.props.token,
      title: title,
      //subTitle : this.props.subTitle,
      content: content,
      status: true,
      tags: tags,
    };
    return (
      <View style={{...styles.container, padding: 10}}>
        <View
          style={{
            ...styles.horizontalLayout,
            justifyContent: "space-between",
          }}>
          {author && (
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
          )}

          <View
            style={{
              ...styles.verticalLayout,
              paddingRight: 10,
              flex: 60,
            }}>
            <Text style={{...styles.title}} numberOfLines={2}>
              {title}
            </Text>
            <View
              style={{
                ...styles.horizontalLayout,
                marginBottom: 0,
                flexWrap: "wrap",
                marginVertical: 5,
              }}>
              {tags &&
                tags.map((item) => {
                  return <TagListItem item={item} />;
                })}
            </View>
          </View>
          <View>
            {this.props.userID === author.id ? (
              <Pressable
                onPress={() =>
                  this.props.showOptionModal(paramsForOptionModal)
                }>
                <MoreOptionIcon width={20} height={20} style={{marginTop: 5}} />
              </Pressable>
            ) : (
              <></>
            )}
          </View>
        </View>
        <View style={{...styles.horizontalLayout, marginHorizontal: 0}}>
          <Text style={{...styles.descriptionText, flex: 80}}>
            <Text style={{...styles.time}}>
              {moment(createdAt).format("MMM Do \u2022 ")}
            </Text>
            {content.length > 120
              ? content.substring(0, 120 - 3) + "..."
              : content}

            <Text style={{...styles.authorLabel}}> asked by </Text>
            <Text style={{fontWeight: "bold"}}>
              {author ? author.name : "ABC"}
            </Text>
          </Text>
          <Image
            style={{
              flex: 20,
              marginTop: 5,
              height: 120,
              borderRadius: 5,
              marginStart: 5,
            }}
            resizeMode="contain"
            source={require("../images/QuestionFeaturedImage.png")}
          />
        </View>
        <View
          style={{
            ...styles.horizontalLayout,
            justifyContent: "space-between",
            marginVertical: 5,
            ...styles.borderColor,
            marginHorizontal: 10,
          }}>
          <View style={{...styles.horizontalLayout, marginTop: 5, flex: 50}}>
            <Image
              style={{width: 20, height: 20, marginEnd: 2}}
              source={require("../images/UnlikedIcon.png")}
            />
            <Text style={{fontSize: 13, paddingTop: 5}}>250000</Text>
          </View>
          <View style={{...styles.horizontalLayout, marginTop: 5, flex: 50}}>
            <Image
              style={{width: 20, height: 20, marginEnd: 2, marginTop: 5}}
              source={require("../images/CommentIcon.png")}
            />
            <Text
              style={{
                fontSize: 13,
                alignSelf: "flex-end",
                textAlign: "right",
              }}>
              {comments.length}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
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
  },
  time: {
    fontSize: 13,

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
    fontWeight: "300",
    fontStyle: "italic",
  },
});
