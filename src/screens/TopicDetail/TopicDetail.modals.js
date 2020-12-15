import React, {Component} from "react";
import Modal from "react-native-modalbox";
import {View, StyleSheet, Dimensions, Pressable} from "react-native";

import CloseOutline from "../../images/close-outline.svg";

import TopicDetail from "./TopicDetail.screens";

var screen = Dimensions.get("window");
export default class TopicDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      isOpen: false,
    };
    this.topicDetailModal = null;

    this.setTopicDetailModalRef = (element) => {
      this.topicDetailModal = element;
    };
    //console.log("navigation Modal", this.props.navigation);
    //this.props.navigation.setOptions({tabBarVisible : false});
  }
  id
  showTopicDetailModal = (id) => {
    //console.log("blog detail modal", item);
    //this.setData(item);
    //this.blogDetailModal.open();
    this.id = id;
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
  
    return (
      <Modal
        ref={this.setTopicDetailModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
        <View style={{flexDirection: "column", flex: 1, marginBottom: 5}}>
          <TopicDetail id={this.id}></TopicDetail>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              position: "absolute",
              right: 5,
              top: 0,
              width: "100%",
              backgroundColor: "rgb(236,213,187, 0.8)",
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

const styles = StyleSheet.create({
 
});
