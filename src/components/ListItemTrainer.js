import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomImage from "./CustomImage";

const width = 137;
export default class ListItemTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const sample =
      "https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=ShirtVNeck&eyeType=Squint&eyebrowType=SadConcernedNatural&facialHairColor=Red&facialHairType=BeardLight&hairColor=Blonde&hatColor=Blue03&mouthType=Twinkle&skinColor=Yellow&topType=ShortHairShortWaved";
    return (
      <View style={{...styles.container}}>
        {/* <Image
            style={{width: width, height: 118, ...styles.border}}
            source={{
              uri:
                this.props.avatarUrl,
            }}
          /> */}
        <CustomImage imgUrl={this.props.avatarUrl} />
        <View style={{...styles.border}}>
        <View style={{...styles.textContainer}}>
          <Text style={{...styles.trainerText}}>{this.props.name}</Text>
          <Text style={{...styles.topicText}}>C#, Ruby on Rails</Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //padding: 10,
    // width: '100%',
    marginHorizontal: 5,
    marginVertical: 10,
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
    borderLeftColor: "rgba(0, 0, 0, .5)",
    borderLeftWidth: 0.5,
    borderRightColor: "rgba(0, 0, 0, .5)",
    borderRightWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, .5)",
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textContainer: {
    width: width,
    
  },
});
