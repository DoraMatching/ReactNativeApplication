import React, {Component} from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
//import { Colors } from './Colors';
import colors from "../themes/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
          <Icon
            name={
              this.state.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"
            }
            size={30}
            color={"white"}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <Text>
              <Text style={styles.label}>Duration : </Text>
              {this.props.data.duration} minutes
            </Text>
            <Text>
              <Text style={styles.label}>Start time : </Text>
              {moment(this.props.data.startTime).format('MMMM Do YYYY, hh:mm a')}
            </Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  parentHr: {
    height: 1,
    color: "#ffffff",
    width: "100%",
  },
  child: {
    backgroundColor: "#D3D3D3",
    padding: 16,
  },
  label: {
    fontWeight: "bold",
  },
});
