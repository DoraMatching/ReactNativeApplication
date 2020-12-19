import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";

import ScaledImage from "../../components/ScaledImage";
import topicc from "../../data/topic";

import {connect} from "react-redux";
import colors from "../../themes/color";

import Accordion from "../../helpers/Accordion";

import actions from "./ClassDetail.actions";

import Button from "react-native-button";

import moment from "moment";


var screen = Dimensions.get("window");
export class ClassDetail extends Component {
  constructor(props){
    super(props);
   
  }
  componentWillMount() {
    this.props.onFetchClassDetail({id: this.props.id, token: this.props.token});
  }
  alert = ({user}) =>
    Alert.alert(
      user.name,
      `Email : ${user.email} \nPhone number : ${user.phoneNumber} \n`,
      [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        {text: "OK", onPress: () => console.log("OK Pressed")},
      ],
      {cancelable: false},
    );
  onLeaveClass() {
    Alert.alert(
      "",
      "Are you SURE you want to LEAVE the class?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            this.props.onFetchClassDeregister({
              id: this.props.id,
              token: this.props.token,
            }),
        },
      ],
      {cancelable: false},
    );
  }
  render() {
    if (this.props.isEdited && this.props.isEdited.success){
      console.log("l75", "ok");
      
      this.props.onFetchClassDetail({id: this.props.id, token: this.props.token});
    } 
    console.log("class detail", this.props.data);
    if (!this.props.data) return <></>;
    const {
      id,
      name,
      featuredImage,
      duration,
      trainer,
      topic,
      members,
      lessons,
      description,
      startTime,
      endTime,
    } = this.props.data;
    return (
      <ScrollView>
        <View style={styles.container}>
        
          <Pressable onPress={() => this.alert(trainer)}>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 1000,

                borderColor: "#c4c4c4",
                borderWidth: 0.5,
                alignSelf: "flex-end",
              }}
              resizeMode="cover"
              source={{
                uri: trainer.user.avatarUrl,
              }}
            />
          </Pressable>
          <Text style={styles.topic}>{topic.name}</Text>
          <Text style={styles.className}>{name}</Text>
          <Text style={styles.authorName}>by {trainer.user.username}</Text>
          <View style={styles.featuredImage}>
            <ScaledImage
              {...{
                uri: featuredImage,
                width: screen.width - styles.container.paddingHorizontal * 2,
                ...styles.featuredImage,
              }}
            />
          </View>
          <Text style={styles.label}>About this class</Text>
          <Text>{description}</Text>
          <Text>
            <Text style={styles.title}>Duration: </Text>
            {duration} hours
          </Text>
          <Text>
            <Text style={styles.title}>Start time: </Text>
            {moment(startTime).format("MMMM Do YYYY, hh:mm a")}
          </Text>
          <Text style={{marginBottom: 5}}>
            <Text style={styles.title}>End time: </Text>
            {moment(endTime).format("MMMM Do YYYY, hh:mm a")}
          </Text>
          {trainer.user.id != this.props.userID &&
            (members.map((item) => item.user.id).indexOf(this.props.userID) ===
            -1 ? (
              <Button
                style={styles.buttonContent}
                containerStyle={[styles.button]}
                onPress={() =>
                  this.props.onFetchClassRegister({
                    id: this.props.id,
                    token: this.props.token,
                  })
                }>
                JOIN NOW
              </Button>
            ) : (
              <Button
                style={styles.buttonContent}
                containerStyle={styles.button}
                onPress={() => this.onLeaveClass()}>
                LEAVE THE CLASS
              </Button>
            ))}
          {trainer.user.id === this.props.userID && (
            <Button
              style={styles.buttonContent}
              containerStyle={styles.button}
              onPress={() => this.props.showLessonFormModal(id)}>
              DESIGN YOUR LESSONS
            </Button>
          )}
          <Text style={styles.label}>Members</Text>
          <View style={styles.member}>
            {members?.map((item) => (
              <Pressable onPress={() => this.alert(item)}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 1000,
                    margin: 5,
                    borderColor: "#c4c4c4",
                    borderWidth: 0.5,
                    //alignSelf: "flex-end",
                  }}
                  resizeMode="cover"
                  source={{
                    uri: item.user.avatarUrl,
                  }}
                />
              </Pressable>
            ))}
          </View>
          <Text style={styles.label}>Lessons</Text>
          <View style={styles.lesson}>
            {lessons.map((item) => (
              <Accordion title={item.name} data={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 35,
  },
  avatar: {},
  topic: {
    fontSize: 15,
    color: "#3d3d4e",
  },
  className: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 28,
  },
  authorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  featuredImage: {
    borderRadius: 5,
    marginVertical: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  member: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  lesson: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    color: "#606770",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginVertical: 5,
    //width: "auto",
  },
  buttonContent: {
    color: "white",
    padding: 5,
  },
});
const mapStateToProps = (state) => ({
  data: state.ClassDetailReducer,
  registerResponse: state.ClassRegisterReducer,
  token: state.UserLoginReducer ? state.UserLoginReducer.token : "",
  userID: state.UserLoginReducer ? state.UserLoginReducer.id : "",
  isEdited: state.LessonFormReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchClassDetail: (params) => {
      dispatch(actions.getClassDetailAction(params));
    },
    onFetchClassRegister: (params) => {
      dispatch(actions.getClassRegisterAction(params));
    },
    onFetchClassDeregister: (params) => {
      dispatch(actions.getClassDeregisterAction(params));
    },
    // onFetchTopicClass: (params) => {
    //   dispatch(actions.getTopicClassAction(params));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);
