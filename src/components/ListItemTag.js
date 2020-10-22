import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class ListItemTag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tagText}> {this.props.item.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    marginEnd: 5,

    backgroundColor: "#F0F2F5",
    borderRadius: 4,
  },
  tagText: {
    color: "black",
    fontSize: 12,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 18,
    borderColor: "black",
    borderWidth: 2,
  },
});
