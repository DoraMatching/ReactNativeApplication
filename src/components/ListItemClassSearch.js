import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import TagListItem from "./ListItemTag";
import MoreOptionIcon from "../images/moreOption.svg";


export default class ListItemClassSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log("List item question top: ", this.props);
    const {id, name, description, featuredImage, duration, startTime, topic} = this.props.item;
 
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
          height : 126,
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
          <View style={{flexDirection: "row"}}>
          <TagListItem item={topic} />
          </View>
          <Text style={styles.description} numberOfLines={2}>{description}</Text>
          <Text><Text style={styles.description}>Duration:</Text> {duration}</Text>
          
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
