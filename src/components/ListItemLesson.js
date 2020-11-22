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
import uuid from "uuid-random";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const MyDateTimePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log("currentDate", currentDate);
    console.log("date", date);
    props.setDateTime(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  console.log("class in lesson form: ", props.class);
  return (
    <View style={[styles.dateTimePicker, props.style]}>
      <Button style={styles.button} onPress={showDatepicker}>
        Pick date
      </Button>
      <Button style={styles.button} onPress={showTimepicker}>
        Pick time
      </Button>

      {show && (
        <DateTimePicker
          testID="startDateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const ListItemLesson = (props) => {
  console.log("list item lesson: ", props);
  const [title, setTitle] = useState(!props.name ? "" : props.name);
  const [duration, setDuration] = useState(
    !props.duration ? "" : props.duration.toString(),
  );
  const [date, setDate] = useState(!props.startTime ? null : props.startTime);
  const {action, id} = props;
  if (props.data.success !=  null && props.data.success == false){
    console.log("inside if block");
    alert(props.data.message);
  }
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

      <View style={styles.labelContainer}>
        <Text style={styles.label}>Time start</Text>
        {/* <Text style={{color: "red", ...styles.errorText}}>
          {touched && error ? error : ""}
        </Text> */}
      </View>

      <TextInput
        style={styles.textInput}
        editable={false}
        onChangeText={setDate}
        value={moment(date).format("MMM Do YYYY, h:mm:ss a")}
        returnKeyType="next"
        autoCorrect={false}></TextInput>

        <MyDateTimePicker setDateTime={setDate}/>

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
              props.onPostLesson({name : title, duration, startTime : date, token: props.token, id : props.classID});
              //props.onCreateLesson({id: uuid(), title, duration, timeStart : date});
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
              props.onPatchLesson({name : title, duration, startTime : date, token: props.token, id : props.id});
             // props.onEditLesson({id, title, duration, timeStart : date});
              props.toggleExpand();
            }}>
            Change
          </Button>
        ) : (
          <></>
        )}
        {action === "edit" ? (
          <Button
            style={styles.button}
            onPress={() => {
              props.onDeleteLesson({id, token: props.token});
            }}>
            Delete
          </Button>
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
  dateTimePicker: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
});

const mapStateToProps = (state) => ({
  token : state.UserLoginReducer? state.UserLoginReducer.token : "",
  classID : state.ClassFormReducer.success == true ? state.ClassFormReducer.message.id : "",
  class : state.ClassFormReducer,
  data : state.LessonFormReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateLesson: (item) => {
      dispatch(actions.addLessonAction(item));
    },
    onPostLesson: (params) => {
      dispatch(actions.postLessonAction(params));
    },
    onPatchLesson: (params) => {
      dispatch(actions.patchLessonAction(params));
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
