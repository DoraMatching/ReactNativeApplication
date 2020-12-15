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
import QuestionForm from './QuestionForm.screens'





var screen = Dimensions.get("window");
export default class QuestionFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      isOpen: false,
    };
    this.questionFormModal = null;

    this.setQuestionFormModalRef = (element) => {
      this.questionFormModal = element;
    };
    
    //this.props.navigation.setOptions({tabBarVisible : false});
  }
  

  showQuestionFormModal = () => {
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
        ref={this.setQuestionFormModalRef}
        swipeToClose={false}
        backButtonClose={true}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        isOpen={this.state.isOpen}>
          <View style={{flexDirection: "column", flex: 1,marginBottom: 5}}>
          <QuestionForm onClose={this.onClose}></QuestionForm>
          <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                position: "absolute",
                right: 5,
                top: 0,
                width: '100%',
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
