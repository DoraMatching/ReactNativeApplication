import React, {Component} from "react";
import {Image, StyleSheet, View} from "react-native";

const width = 137;
export default class CustomImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {imgUrl} = this.props;
    // const fetchVectorImage = async (imgUrl) => {
    //     const {data} = await axios.get(imgUrl);
    //     console.log('DATAIMAGE', data);
    //     return data;
    // }
    const bitmapImage = (
      <View style={{...styles.border}}>
      <Image
        style={{width: width, height: 118}}
        source={{
          uri: imgUrl,
        }}
      />
      </View>
    );
    // const vectorImage = (
    //   <SvgUri
    //     width={width}
    //     height={145}
    //     style={{...styles.border, alignItems: 'center',}}
    //     svgXmlData={fetchVectorImage(imgUrl)}
    //   />
    // );
    return <>{bitmapImage}</>;
  }
}

const styles = StyleSheet.create({
  container: {
    //padding: 10,
    // width: '100%',
    marginHorizontal: 5,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  verticalLayout: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
  time: {
    fontSize: 10,
    fontWeight: "300",
    paddingEnd: 5,
    marginBottom: 5,
  },

  descriptionText: {
    marginTop: 10,
    color: "#000",
  },
  trainerText: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
    marginTop: 5,
    color: "#000",
  },
  topicText: {
    fontSize: 13,
    marginLeft: 5,
    marginBottom: 6,
  },
  border: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: "rgba(0, 0, 0, .5)",
    borderWidth: 0.5,
  },
  textContainer: {
    width: width,
    borderLeftColor: "rgba(0, 0, 0, .5)",
    borderLeftWidth: 0.5,
    borderRightColor: "rgba(0, 0, 0, .5)",
    borderRightWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, .5)",
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
