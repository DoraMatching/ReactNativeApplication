import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import TagListItem from "./ListItemTag";
import MoreOptionIcon from "../images/moreOption.svg";

export default class ListItemTopicTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("List item question top: ", this.props);
    const {id, name, description, featuredImage, classes} = this.props.item;
    //     var paramsForOptionModal = {
    //       type : "question",
    //       id : this.props.id,
    //       token : this.props.token,
    //       title : this.props.title,
    //       //subTitle : this.props.subTitle,
    //       content : this.props.content,
    //       status : true,
    //       tags : this.props.tags,
    //   };
    return (
      <View
        style={{
          ...styles.horizontalLayout,
          marginHorizontal: 10,
          marginVertical: 5,

          ...styles.border,
          ...styles.borderColor,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "#ffffff",
          height : 110,
        }}>
        <Image
          style={{flex: 25,  ...styles.border}}
          resizeMode="cover"
          source={{uri : featuredImage}}
        />
        <View style={{flex: 75, marginHorizontal: 10, marginVertical: 5,flexDirection: "column"}}>
          <Text
            style={{
              ...styles.title,
              ...styles.borderColor,
              marginTop: 10,
              width: "100%",
            }}
            numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.description} numberOfLines={4}>{description}</Text>
        </View>

        <View>
          {this.props.author && this.props.userID === this.props.author.id ? (
            <Pressable
              onPress={() => this.props.showOptionModal(paramsForOptionModal)}>
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
  description: {
    borderWidth: 0.5,
    borderColor: "transparent",
    flexWrap: "wrap",
    color: "#3d3d4e",
  },
});
