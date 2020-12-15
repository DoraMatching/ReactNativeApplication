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
        <View style={styles.inside}>
        <Text style={styles.tagText}> {this.props.item.name} </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#f4f4f4",
    marginEnd: 5,
    marginBottom: 5,
    borderRadius: 5,
    
  },
  inside : {
    paddingHorizontal: 6,
    paddingVertical: 3,
    
    
    borderColor: "#bcbcc5",
    borderWidth: 1,
    borderRadius: 5,
  },
  tagText: {
    color: "#3d4560",
    fontSize: 13,
    fontWeight: "600",
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
