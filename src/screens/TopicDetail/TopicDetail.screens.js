import React, {Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import {connect} from "react-redux";
import ScaledImage from "../../components/ScaledImage";

import topic from "../../data/topic";
import colors from "../../themes/color";

import ListItemClass from "../../components/ListItemClass";
var screen = Dimensions.get("window");
export class TopicDetail extends Component {
  render() {
    const {featuredImage, name, description, classes} = topic[0];
    return (
      <View style={styles.layoutContainer}>
        <StatusBar backgroundColor={"#ECD5BB"} />
        <View style={styles.titleContainer}>
          <View style={styles.featuredImage}>
            <ScaledImage
              {...{
                uri: featuredImage,
                width:
                  screen.width - styles.titleContainer.paddingHorizontal * 2,
                ...styles.featuredImage,
              }}
            />
          </View>
          <Text style={styles.topicName} adjustsFontSizeToFit
              numberOfLines={2}>{name}</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <>
              <Text style={styles.label}>About this topic</Text>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.label}>Classes</Text>
              <ListItemClass></ListItemClass>
              <ListItemClass></ListItemClass>
              <ListItemClass></ListItemClass>
            </>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 40,
    backgroundColor: "#ECD5BB",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  featuredImage: {
    borderRadius: 10,
    flex: 80,
  },
  contentContainer: {
    flex: 60,
    paddingHorizontal: 20,
  },
  topicName: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    //borderColor: "transparent",
    //borderWidth: 0.5,
    flexWrap: "wrap",
    flex: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {},
});
