import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import moment from "moment";

export default class ListItemQuestionTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <Text style={{color: "#3d3d4e", flex: 90}} numberOfLines={1}>
              {this.props.tags.map(({name}) => name).join(" \u2022 ")}
            </Text>
          </View>
        </View>
        <View style={{...styles.horizontalLayout, marginHorizontal: 0}}>
          <Text style={{...styles.descriptionText, flex: 80}}>
            <Text style={{...styles.time}}>
              {moment(this.props.createdAt).format("MMM Do \u2022 ")}
            </Text>
            {this.props.content.length > 120
              ? this.props.content.substring(0, 120 - 3) + "..."
              : this.props.content}

            <Text style={{...styles.authorLabel}}> asked by </Text>
            <Text style={{fontWeight: "bold"}}>
              {this.props.author ? this.props.author.name : "ABC"}
            </Text>
          </Text>
          <Image
            style={{
              flex: 20,
              marginTop: 5,
              height: "100%",
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
