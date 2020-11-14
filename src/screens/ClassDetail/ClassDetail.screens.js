import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import ScaledImage from "../../components/ScaledImage";
import topicc from "../../data/topic";

import {connect} from "react-redux";
import colors from "../../themes/color";

import Accordion from "../../helpers/Accordion";
var screen = Dimensions.get("window");
export class ClassDetail extends Component {
  render() {
    const {
      name,
      featuredImage,
      duration,
      trainer,
      topic,
      trainee,
      lesson,
    } = topicc[0].classes[0];
    return (
      <ScrollView>
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
          <Text style={styles.label}>About this class</Text>
          <Text style={styles.label}>Members</Text>
          <View style={styles.member}>
            {trainee.map((item) => (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 1000,
                  margin: 5,
                  borderColor: "#c4c4c4",
                  borderWidth: 0.5,
                  //alignSelf: "flex-end",
                }}
                resizeMode="cover"
                source={{
                  uri: item.avatarUrl,
                }}
              />
            ))}
          </View>
          <Text style={styles.label}>Lessons</Text>
          <View style={styles.lesson}>
            {lesson.map((item) => (
              <Accordion title={item.name} data={item.content} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
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
  member: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  lesson: {
    flexDirection: "column",
  },
});
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);
