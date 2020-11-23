import React, {Component} from "react";
import {Text, View, StyleSheet, Image, ImageBackground} from "react-native";
import topicc from "../data/topic";
export default class ListItemClass extends Component {
  render() {
    const {
      name,
      featuredImage,
      duration,
      trainer,
      topic,
    } = this.props.item;
    return (
        <ImageBackground
        source={{uri: featuredImage}}
        style={styles.image}
        imageStyle={styles.imageStyle}>
      <View style={styles.layoutContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.classNameContainer}>
            <Text style={styles.classname} numberOfLines={1}>{name.length > 30
              ? name.substring(0, 30 - 3) + "..."
              : name}</Text>
            <View>
              
                <Text style={styles.topic}>{topic.name}</Text>
              
            </View>
          </View>
          <Text style={styles.duration}>On-going: {duration} hours</Text>
        </View>
        <View style={styles.trainer}>
          
            <Image
              style={styles.avatar}
              resizeMode="cover"
              source={{
                uri: trainer.user.avatarUrl,
              }}
            />
            <Text style={styles.trainerName}>{trainer.user.username}</Text>
          
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  layoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,.6)",
    padding : 10,
    height : 120,
    borderRadius: 5,
    
  },
  contentContainer: {
    justifyContent: "space-between",
  },
  classNameContainer: {
      flex : 80,
  },
  classname: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  topic: {
    fontSize: 12,
    color: "white",
  },
  duration: {
      fontSize: 13,
      color: "white",
      flex : 20,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 1000,
    
    borderColor: "#ffffff",
    borderWidth: 2,
  },
  trainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  trainerName: {
      color: "white",
      fontSize: 12,
      
  },
  imageStyle: {
    resizeMode: "cover",
    borderRadius: 5,
    
    
  },
  image: {
    width: "100%",
    //height: 160,
    //flexDirection: "column-reverse",
    marginVertical: 5,
  },
});
