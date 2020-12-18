import React, {Component} from "react";
import {Text, View, Image, StyleSheet, Pressable} from "react-native";
import moment from "moment";
import FastImage from "react-native-fast-image";
import TagListItem from "./ListItemTag";
import MoreOptionIcon from "../images/moreOption.svg";

export default class ListItemBlogSearch extends Component {
  render() {
    var paramsForOptionModal = {
      type : "blog",
      id : this.props.id,
      token : this.props.token,
      title : this.props.title,
      subTitle : this.props.subTitle,
      content : this.props.content,
      tags : this.props.tags,
      featuredImage: this.props.featuredImage,
      status : true,
  };
  if (!this.props.author || !this.props.title || !this.props.tags || !this.props.createdAt || !this.props.subTitle) return <></>;
    return (
      <View style={{...styles.container, padding: 10}}>
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
              uri: this.props.author.avatarUrl,
            }}
          />
          <View
            style={{
              ...styles.verticalLayout,
              paddingRight: 10,
              flex: 60,
            }}>
            <Text style={{...styles.title}} numberOfLines={2}>
              {this.props.title}
            </Text>
            <View
              style={{
                ...styles.horizontalLayout,
                marginBottom: 0,
                flexWrap: "wrap",
                marginVertical: 5,
              }}>
              {this.props.tags.map((item) => {
                return <TagListItem item={item} />;
              })}
            </View>
          </View>
          <View>
            {this.props.userID === this.props.author.id ? (
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
              {moment(this.props.createdAt).format("MMM Do \u2022 ")}
            </Text>
            {this.props.subTitle.length > 120
              ? this.props.subTitle.substring(0, 120 - 3) + "..."
              : this.props.subTitle}

            <Text style={{...styles.authorLabel}}> written by </Text>
            <Text style={{fontWeight: "bold"}}>
              {this.props.author ? this.props.author.name : "ABC"}
            </Text>
          </Text>
          {/* <Image
            style={{
              flex: 20,
              marginTop: 5,
              height: "100%",
              borderRadius: 5,
              marginStart: 5,
            }}
            resizeMode="cover"
            source={{
              uri: this.props.featuredImage,
            }}
          /> */}
          <FastImage
            style={{
              flex: 20,
              marginTop: 5,
              height: 75,
              borderRadius: 5,
              marginStart: 5,
            }}
            source={{
              uri: this.props.featuredImage,
              //headers: {Authorization: "someAuthToken"},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
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
            <Text style={{fontSize: 13, paddingTop: 5}}>0</Text>
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
              {this.props.comments.length}
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
