import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

export default class ListItemQuestionTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          ...styles.horizontalLayout,
          marginHorizontal: 10,
          marginVertical: 5,
          
          height: 103,
          ...styles.border,
          ...styles.borderColor,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "#ffffff",
        }}>
        <Image
          style={{flex: 25, height: 103, ...styles.border}}
          resizeMode="cover"
          source={{
            uri:
              require("../images/QuestionFeaturedImage.png")
          }}
        />
        <View style={{marginHorizontal: 10, flexWrap: "wrap", flex: 75}}>
          <Text
            style={{
              ...styles.title,
              ...styles.borderColor,
              marginTop: 10,
              width: "100%",
            }}
            numberOfLines={2}>
            {this.props.title}
          </Text>
          <View
            style={{
              ...styles.horizontalLayout,
              ...styles.borderColor,

              flexWrap: "wrap",
              height: 20,
              justifyContent: "flex-start",
              
            }}>
            
            <Text style={{color: "#3d3d4e", flex: 90, }} numberOfLines={1}>
              {this.props.tags
                .map(({name}) => name)
                .join(" \u2022 ")}
            </Text>
          </View>

          <View
            style={{
              ...styles.horizontalLayout,
              justifyContent: "space-between",
              width: "100%",
              ...styles.borderColor,
            }}>
            <View style={{...styles.horizontalLayout, marginTop: 5}}>
              <Image
                style={{width: 20, height: 20, marginEnd: 2}}
                source={require("../images/UnlikedIcon.png")}
              />
              <Text style={{fontSize: 13, paddingTop: 5}}>250000</Text>
            </View>
            <View style={{...styles.horizontalLayout, marginTop: 5}}>
              <Image
                style={{width: 20, height: 20, marginEnd: 2, marginTop: 5}}
                source={require("../images/CommentIcon.png")}
              />
              <Text
                style={{
                  fontSize: 13,
                  alignSelf: "flex-end",
                  textAlign: "right",
                }}>
                2500
              </Text>
            </View>
          </View>
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
  borderColor: {
    
  },
});
