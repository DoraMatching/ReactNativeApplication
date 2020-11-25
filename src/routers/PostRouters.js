import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Popover from "react-native-popover";

export default class PostRouters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      buttonRect: {},
    };
    this.button = null;
    this.setButtonRef = (element) => {
      this.button = element;
    };
  }
  showPopover() {
    this.button.measure((ox, oy, width, height, px, py) => {
      this.setState({
        isVisible: true,
        buttonRect: {x: px, y: py, width: width, height: height},
      });
    });
  }

  closePopover() {
    this.setState({isVisible: false});
  }

  componentDidMount(){
    const unsubscribe = this.props.navigation.addListener('tabPress', e => {
        // Prevent default behavior
        e.preventDefault();
  
        alert('Default behavior prevented');
        // Do something manually
        // ...
      });
  
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight ref='button' style={styles.button} onPress={this.showPopover}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableHighlight>

        <Popover
          isVisible={this.state.isVisible}
          fromRect={this.state.buttonRect}
          onClose={this.closePopover}>
          <Text>I'm the content of this popover!</Text>
        </Popover>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(43, 186, 180)',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonText: {
  }
});
