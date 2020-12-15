import React, {Component} from "react";
import {Text, View, StyleSheet, ImageBackground} from "react-native";

export default class ListItemTopic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{uri: this.props.featuredImage}}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <View style={styles.content}>
            <Text style={styles.textName} numberOfLines={2}>{this.props.name}</Text>
            <Text style={styles.textClassLength} numberOfLines={1}>
              {this.props.classes? this.props.classes.length : 0} classes
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingBottom: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    width: 120,
    height: 160,
    flexDirection: "column-reverse",
    
  },
  imageStyle: {
    resizeMode: "cover",
    borderRadius: 5,
    borderWidth: 0.25,
    borderColor: "rgba(0,0,0,.5)",
    
  },
  content: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    paddingLeft: 5,
  },
  textName: {
    fontWeight: "bold",
    color: "white",
  },
  textClassLength: {
    color: "white",
    fontSize: 12,
  },
});
