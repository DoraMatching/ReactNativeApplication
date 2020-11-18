import React, {useState, Component, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Button from "react-native-button";
import colors from "../../themes/color";
import actions from "./TopicForm.actions";
import _ from "lodash";
import defaultImage from "../../images/BlogFeaturedImage.png";

import ImagePicker from "react-native-image-picker";
import {Image} from "react-native-elements";

const TopicInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, ...input},
    label,
    val,
    ...rest
  } = props;
  //const [date, setDate] = useState(new Date());
  return (
    <View style={styles.textInputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={{color: "red", ...styles.errorText}}>
          {touched && error ? error : ""}
        </Text>
      </View>
      {val ? (
        <>
          <TextInput
            style={styles.textInput}
            onChangeText={onChange}
            {...input}
            value={val}
            {...rest}
            returnKeyType="next"
            autoCorrect={false}></TextInput>
        </>
      ) : (
        <>
          <TextInput
            style={styles.textInput}
            onChangeText={onChange}
            {...input}
            {...rest}
            returnKeyType="next"
            autoCorrect={false}></TextInput>
        </>
      )}
    </View>
  );
};

//Validation
const required = (value) => {
  //console.log("validate username", value);
  return value ? undefined : "The field is required";
};

const TopicFormScreen = (props) => {
  const [avatar, setAvatar] = useState(defaultImage);

  const handlePicker = () => {
    console.log("edit");
    ImagePicker.showImagePicker({}, (response) => {
      console.log("Response = ", response);
      //setHidden(true);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setAvatar({uri: response.uri});
        // here we can call a API to upload image on server
      }
    });
  };

  const submit = (values) => {
    
    console.log("TopicFormScreen", values);
    props.onCreateTopic({token: props.token, ...values});
    //console.log("BlogFormScreen", values);
  };
  if (props.data && props.data.success === true) {
    alert("Your Topic has just been created !");
    props.onClose();
  } else if (props.data.success === false) {
    alert(props.data.message);
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <Pressable onPress={Keyboard.dismiss} style={styles.layout}>
          <View style={styles.layout}>
            <Field
              name={"name"}
              label={"Title"}
              component={TopicInput}
              validate={required}
            />
            <Field
              name={"description"}
              props={{
                multiline: true,
                numberOfLines: 5,
              }}
              label={"Description"}
              component={TopicInput}
              validate={required}
            />
            <Field
              name={"featuredImage"}
              props={{
                
              }}
              label={"Featured image"}
              component={TopicInput}
              validate={required}
            />

            <Pressable style={styles.featuredImage}>
              <Image
                source={avatar}
                PlaceholderContent={<ActivityIndicator />}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 3,
                  resizeMode: "cover",
                }}
              />

              <Pressable style={styles.overlay}>
                <Text style={styles.editLabel} onPress={handlePicker}>
                  Edit your featured image
                </Text>
              </Pressable>
            </Pressable>

            <Button
              onPress={props.handleSubmit(submit)}
              style={[
                styles.button,
                {
                  fontSize: 18,
                  paddingVertical: 10,
                  marginVertical: 5,
                  //bottom: 10,
                },
              ]}>
              Create
            </Button>
            {/* </ScrollView> */}
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    textAlignVertical: "top",
  },
  tagInput: {
    backgroundColor: "#f0f2f5",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    //marginVertical: 2,
    borderTopColor: "lightgray",
    borderLeftColor: "lightgray",
    borderBottomColor: "lightgray",
    borderRightColor: "transparent",
    borderTopWidth: 0.25,
    borderLeftWidth: 0.25,
    borderBottomWidth: 0.25,
    color: "black",
    //textAlignVertical: "top",
  },
  layout: {
    //flex: 1,
    // marginLeft: 30,
    // marginRight: 30,
    //flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 10,
    //marginVertical: 10,
    marginTop: 30,
  },
  button: {
    //marginRight: 5,
    backgroundColor: colors.primary,
    color: "white",
    //height: "auto",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  featuredImage: {
    marginVertical: 5,
    width: "100%",
    height: 200,
  },
  overlay: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.7)",
    position: "absolute",
  },
  editLabel: {
    color: "white",
    fontSize: 18,
    padding: 5,
  },
});

const TopicForm = reduxForm({
  form: "Topic",
})(TopicFormScreen);

const mapStateToProps = (state) => ({
  data: state.TopicFormReducer,
  token: state.UserLoginReducer ? state.UserLoginReducer.token : "",
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateTopic: (params) => {
      dispatch(actions.postTopicAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);
