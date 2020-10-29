import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

export default class ListItemBlogSearch extends Component {
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
          paddingVertical: 5,
          paddingHorizontal: 5,
          height: 110,
          ...styles.border,
          ...styles.borderColor,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          elevation : 5,
        }}>
        <Image
          style={{flex: 25, height: 103, ...styles.border}}
          resizeMode="cover"
          source={{
            uri:
              "https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/news/featured_media/featured-image-index.png",
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
            UI Components và bước đầu hướng đến MicroViewControllers trong lập
            trình iOS UI Components và bước đầu hướng đến và bước đầu hướng đến
          </Text>
          <View
            style={{
              ...styles.horizontalLayout,
              ...styles.borderColor,

              flexWrap: "wrap",
              height: 20,
              justifyContent: "flex-start",
              paddingTop: 5,
            }}>
            
            <Text style={{color: "#3d3d4e", flex: 90, }} numberOfLines={1}>
              {[
                {
                  name: "Banana",
                },
                {
                  name: "Orange",
                },
                {
                  name: "Apple",
                },
                {
                  name: "Banana",
                },
                {
                  name: "Apple",
                },
                {
                  name: "Banana",
                },
              ]
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
