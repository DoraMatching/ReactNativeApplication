import React, {Component} from "react";
import Modal from "react-native-modalbox";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import CloseOutline from "../../images/close-outline.svg";
import TrainerRegister from "./TrainerRegister.screens";

var screen = Dimensions.get("window");
export default class TrainerRegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      isOpen: false,
    };
    this.TrainerRegisterModal = null;

    this.setTrainerRegisterModalRef = (element) => {
      this.TrainerRegisterModal = element;
    };

    //this.props.navigation.setOptions({tabBarVisible : false});
  }

  showTrainerRegisterModal = () => {
    //console.log("blog detail modal", item);

    //this.blogDetailModal.open();
    this.setState({isOpen: true});
    //console.log("blog detail modal tags", this.tags);
  };

  onOpen = () => {
    this.setState({isOpen: true});
  };

  onClose = () => {
    this.setState({isOpen: false});
  };
  render() {
    // var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;
    // const sampleUrl = "https://www.w3schools.com/w3images/avatar2.png";
    // const flexTop = 95;
    // const flexBottom = 5;
    // console.log("BlogDetail: ", this.props.blog);
    return (
      <Modal
        style={{
          height: 200,
          width: 350,
        }}
        ref={this.setTrainerRegisterModalRef}
        position={"center"}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
        <TrainerRegister onClose={this.onClose}></TrainerRegister>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",

    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 5,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  author: {
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,

    paddingEnd: 5,
    marginBottom: 5,
    color: "#3d3d4e",
  },
  description: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  featuredImage: {},
  content: {
    marginVertical: 5,
  },
});
