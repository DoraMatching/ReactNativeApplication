import React, {Component} from "react";
import Modal from "react-native-modalbox";
import {View, StyleSheet, Dimensions, Pressable} from "react-native";

import CloseOutline from "../../images/close-outline.svg";

import ProfileInfo from "./ProfileInfo.container";

var screen = Dimensions.get("window");
export default class BlogDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.profileInfoModal = null;

    this.setProfileInfoModalRef = (element) => {
      this.profileInfoModal = element;
    };
  }
  id;
  showProfileInfoModal = (id) => {
    this.id = id;
    this.setState({isOpen: true});
  };

  onOpen = () => {
    this.setState({isOpen: true});
  };

  onClose = () => {
    this.setState({isOpen: false});
  };
  render() {
    return (
      <Modal
        ref={this.setProfileInfoModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
        <View style={{flexDirection: "column", flex: 1, marginBottom: 5}}>
          <ProfileInfo id={this.id}></ProfileInfo>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              position: "absolute",
              right: 5,
              top: 0,
              width: "100%",
              backgroundColor: "rgb(255,255,255)",
              borderBottomColor: "rgba(0,0,0,0.5)",
              borderBottomWidth: 0.3,
            }}>
            <Pressable
              style={{margin: 5}}
              onPress={() => this.setState({isOpen: false})}>
              <CloseOutline width={30} height={30} fill={"black"} />
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({});
