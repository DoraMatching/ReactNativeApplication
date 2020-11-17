import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import TagListItem from "./ListItemTag";
import MoreOptionIcon from "../images/moreOption.svg";

export default class ListItemQuestionTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var paramsForOptionModal = {
      type : "question",
      id : this.props.id,
      token : this.props.token,
      title : this.props.title,
      //subTitle : this.props.subTitle,
      content : this.props.content,
      status : true,
      tags : this.props.tags,
  };
    return (
      <View
        style={{
          ...styles.horizontalLayout,
          marginHorizontal: 10,
          marginVertical: 5,

          height: 103,
          ...styles.border,
          ...styles.borderColor,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "#ffffff",
        }}>
        <Image
          style={{flex: 25, height: 103, ...styles.border}}
          resizeMode="contain"
          source={require("../images/QuestionFeaturedImage.png")}
        />
        <View style={{marginHorizontal: 10, flexWrap: "wrap", flex: 75}}>
          <Text
            style={{
              ...styles.title,
              ...styles.borderColor,
              marginTop: 10,
              width: "100%",
            }}
            numberOfLines={1}>
            {this.props.title}
          </Text>
          <View
            style={{
              ...styles.horizontalLayout,
              ...styles.borderColor,

              flexWrap: "wrap",
              height: 20,
              justifyContent: "flex-start",
              marginBottom: 10,
            }}>
            {/* <Text style={{color: "#3d3d4e", flex: 90, }} numberOfLines={1}>
              {this.props.tags
                .map(({name}) => name)
                .join(" \u2022 ")}
            </Text> */}

            <View
              style={{
                ...styles.horizontalLayout,
                marginBottom: 0,
                flexWrap: "wrap",
                marginVertical: 5,
                flex: 90,
                //marginVertical: 5,
              }}>
              {this.props.tags.map((item) => {
                return <TagListItem item={item} />;
              })}
            </View>
          </View>

          <View
            style={{
              ...styles.horizontalLayout,
              justifyContent: "space-between",
              width: "100%",
              ...styles.borderColor,
            }}>
            <View style={{...styles.horizontalLayout, marginTop: 5}}>
              <Image
                style={{width: 20, height: 20, marginEnd: 2}}
                source={require("../images/UnlikedIcon.png")}
              />
              <Text style={{fontSize: 13, paddingTop: 5}}>250000</Text>
            </View>
            <View style={{...styles.horizontalLayout, marginTop: 5}}>
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
                2500
              </Text>
            </View>
          </View>
        </View>
       
        <View>
            { this.props.author && this.props.userID === this.props.author.id ? (
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
    );
  }
}

const styles = StyleSheet.create({
  horizontalLayout: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
  },
  border: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  borderColor: {},
});
