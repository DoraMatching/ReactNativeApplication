import React, {useState, Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
} from "react-native";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Button from "react-native-button";
import colors from "../../themes/color";
const QuestionInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, name, value, ...input},
    label,
    val,
    ...rest
  } = props;
  console.log(`QuestionEdit Input ${name}`, value);
  //const [editingValue, setEditingValue] = useState(val);
  //console.log(name, editingValue);
  return (
    <View style={styles.textInputContainer}>
      {console.log("props", props)}
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

const QuestionFormEditScreen = (props) => {
  
  
  console.log("QuestionFormEdit props: ", props);
  //if (!props.edit) return (<></>);
  const {id, token, title, content} = props.params;

  const [editingTitle, setEditingTitle] = useState(title);
  const [editingContent, setEditingContent] = useState(content);

  //console.log("blogform screen", props);
  const handlePicker = () => {
    console.log('edit');
    ImagePicker.showImagePicker({}, (response) => {
      console.log("Response = ", response);
      setHidden(true);
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
    // const tags = [
    //   {
    //     name: "java",
    //   },
    // ];
    // const featuredImage =
    //   "https://www.pixelrockstar.com/wp-content/uploads/2017/04/featured-image.png";
    // props.onCreateBlog({tags, featuredImage, token: props.token, ...values});
    console.log("QuestionFormEditScreen", values);
    props.onEditQuestion({id, token, isDraft : true,...values});
    //props.onEditBlog({id, token, isDraft : true,...values});
    // if (props.data && props.data.success === true) {
    //   alert("Your blog has just been created !");
    //   props.onClose();
    // } else if (props.data.success === false) {
    //   alert(props.data.message);
    // }
  };

  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <Pressable onPress={Keyboard.dismiss} style={styles.layout}>
          <View style={styles.layout}>
            {/* <ScrollView> */}
            <Field
              name={"title"}
              label={"Title"}
              component={QuestionInput}
              validate={required}
              onChange={setEditingTitle}
              val={editingTitle}
            />
            <Field
              name={"content"}
              props={{
                multiline: true,
                numberOfLines: 5,
              }}
              label={"Body"}
              component={QuestionInput}
              validate={required}
              onChange={setEditingContent}
              val={editingContent}
            />

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

export const QuestionFormEdit = reduxForm({
  form: "questionEdit",
})(QuestionFormEditScreen);

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
  layout: {
    //flex: 1,
    // marginLeft: 30,
    // marginRight: 30,
    //flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
    //marginVertical: 10,
  },
  button: {
    marginRight: 5,
    backgroundColor: colors.primary,
    color: "white",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
});