import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Dimensions} from "react-native";

import ScaledImage from "../../components/ScaledImage";
import topicc from "../../data/topic";

import {connect} from "react-redux";
import colors from "../../themes/color";
var screen = Dimensions.get("window");
export class ClassDetail extends Component {
  render() {
    const {
      name,
      featuredImage,
      duration,
      trainer,
      topic,
    } = topicc[0].classes[0];
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 1000,
            
            borderColor: "#c4c4c4",
            borderWidth: 0.5,
            alignSelf: "flex-end",
          }}
          resizeMode="cover"
          source={{
            uri: trainer.avatarUrl,
          }}
        />
        <Text style={styles.topic}>{topic[0].name}</Text>
        <Text style={styles.className}>{name}</Text>
        <Text style={styles.authorName}>by {trainer.username}</Text>
        <View style={styles.featuredImage}>
          <ScaledImage
            {...{
              uri: featuredImage,
              width: screen.width - styles.container.paddingHorizontal * 2,
              ...styles.featuredImage,
            }}
          />
        </View>
        <Text>About this class</Text>
        <Text>Members</Text>
        <View></View>
        <Text>Lessons</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  avatar: {},
  topic: {
    fontSize: 15,
    color: "#3d3d4e",
  },
  className: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 28,
  },
  authorName: {
      fontSize: 18,
      fontWeight: "bold",
  },
  featuredImage: {},
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);
