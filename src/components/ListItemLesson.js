import React, {useState, Component, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import Button from "react-native-button";
import actions from "../screens/LessonForm/LessonForm.actions";
import colors from "../themes/color";
import {connect} from "react-redux";
import uuid from 'uuid-random';

const ListItemLesson = (props) => {
  console.log("list item lesson: ", props);
  const [title, setTitle] = useState(!props.title ? "" : props.title);
  const [duration, setDuration] = useState(
    !props.duration ? "" : props.duration,
  );
  const {action, id} = props;
  return (
    <Pressable style={styles.textInputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Title</Text>
        {/* <Text style={{color: "red", ...styles.errorText}}>
          {touched && error ? error : ""}
        </Text> */}
      </View>

      <TextInput
        style={styles.textInput}
        onChangeText={setTitle}
        value={title}
        returnKeyType="next"
        autoCorrect={false}></TextInput>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>Duration</Text>
        {/* <Text style={{color: "red", ...styles.errorText}}>
          {touched && error ? error : ""}
        </Text> */}
      </View>

      <TextInput
        style={styles.textInput}
        onChangeText={setDuration}
        value={duration}
        returnKeyType="next"
        autoCorrect={false}></TextInput>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginVertical: 5,
        }}>
        {action === "create" ? (
          <Button
            style={styles.button}
            onPress={() => {
              props.onCreateLesson({id: uuid(), title, duration});
             
            }}>
            Create
          </Button>
        ) : (
          <></>
        )}
        {action === "edit" ? (
          <Button
            style={styles.button}
            onPress={() => {
              props.onEditLesson({id, title, duration});
              props.toggleExpand();
            }}>
            Change
          </Button>
        ) : (
          <></>
        )}
        {action === "edit" ? (
          <Button style={styles.button}
          onPress={() => {
            props.onDeleteLesson({id, title, duration});
          }}>Delete</Button>
        ) : (
          <></>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 3,
  },
  labelContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  label: {
    //paddingVertical: 5,
  },
  errorText: {
    //textAlign: "right",
    flex: 80,
    textAlign: "right",
    // borderWidth: 1,
    // borderColor: "black",
  },
  textInput: {
    backgroundColor: "#f0f2f5",
    borderRadius: 5,
    marginVertical: 5,
    borderColor: "lightgray",
    borderWidth: 1,
    color: "black",
    //textAlignVertical: "top",
  },
  button: {
    backgroundColor: colors.primary,
    color: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateLesson: (item) => {
      dispatch(actions.addLessonAction(item));
    },
    onEditLesson: (item) => {
      dispatch(actions.editLessonAction(item));
    },
    onDeleteLesson: (item) => {
      dispatch(actions.deleteLessonAction(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemLesson);
