import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import TimeAgo from "react-native-timeago";
import MoreOptionIcon from "../images/moreOption.svg";
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{...styles.container}}>
        <View style={{...styles.horizontalLayout, alignItems: "center",justifyContent: "space-between",}}>
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
              uri: this.props.author.avatarUrl,
            }}
          />
          <View
            style={{
              paddingHorizontal: 10,
              justifyContent: "center",
              flex: 60,
            }}>
            <Text style={{...styles.name}} numberOfLines={2}>
              {this.props.author.name}
            </Text>
            <TimeAgo time={this.props.createdAt} style={{...styles.time}} />
            {/* <Text style={{...styles.time}}>2 minutes ago</Text> */}
          </View>
          <View>
            {this.props.userID === this.props.author.id ? (
              <Pressable onPress={() => this.props.onEditComment(this.props.content, this.props.id, this.props.author.id )}>
              <MoreOptionIcon width={20} height={20} style={{marginTop: 5}} />
              </Pressable>
            ) : (
              <></>
            )}
          </View>
        </View>
        <Text style={{...styles.comment}}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f2f5",
    borderRadius: 5,
    padding: 10,
    //marginHorizontal: 10,
    marginVertical: 5,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  time: {
    fontSize: 11,
    fontWeight: "300",
    paddingEnd: 5,
    marginBottom: 5,
  },
  comment: {
    marginVertical: 5,
  },
});
