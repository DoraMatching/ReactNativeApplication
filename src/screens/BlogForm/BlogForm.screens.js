import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import {Field, reduxForm} from "redux-form";
import colors from '../../themes/color';
import Button from 'react-native-button'
const BlogInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, name, ...input},
    label,
    styles,
    ...rest
  } = props;
  return (
    <>
      <Text style={{color: "red", ...styles.errorText}}>
        {touched && error ? error : ""}
      </Text>
      <TextInput
        style={styles}
        onChangeText={onChange}
        {...input}
        {...rest}
        returnKeyType="next"
        autoCorrect={false}></TextInput>
    </>
  );
};

//Validation
const required = (value) => {
  //console.log("validate username", value);
  return value ? undefined : "The field is required";
};



const BlogFormScreen = (props) => {
  const submit = (values) => {
    const tags = [
      {
        "name": "java"
      }
    ];
    const featuredImage = "https://www.pixelrockstar.com/wp-content/uploads/2017/04/featured-image.png";
    props.onCreateBlog({tags,featuredImage, token : props.token, ...values});
    console.log("BlogFormScreen", values);
    if (props.data && props.data.success === true) {
      props.onClose();
    } else if (props.data.success === false) {
      alert(props.data.message);
    }
  };
  
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, paddingHorizontal: 10, paddingTop: 40,}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <ScrollView>
            <Field
              name={"title"}
              placeholder={"Type your title here ..."}
              component={BlogInput}
              validate={required}
              styles = {styles.title}
            />
            <Field
              name={"subTitle"}
              props={{
                multiline: true,
                numberOfLines: 5,
              }}
              placeholder={"Your description is here ..."}
              component={BlogInput}
              validate={required}
              styles = {styles.description}
            />

            <Field
              name={"content"}
              props={{
                multiline: true,
                numberOfLines: 5,
              }}
              placeholder={"Your content is here ..."}
              component={BlogInput}
              validate={required}
              styles = {styles.description}
            />

            <Button
              onPress={props.handleSubmit(submit)}
              style={[
                styles.button,
                {fontSize: 18, paddingVertical: 10, marginVertical: 5},
              ]}>
              Create
            </Button>
          </ScrollView>
          
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const BlogForm = reduxForm({
  form: "blog",
})(BlogFormScreen);

const styles = StyleSheet.create({
  errorText: {
    //textAlign: "right",
    width: "100%",
    height: 5,
    textAlign: "right",
    borderWidth: 1,
    borderColor: "transparent",
  },
  button: {
    
    backgroundColor: colors.primary,
    color: "white",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  title: {
      fontWeight: 'bold',
      fontSize : 18,
      color: 'black',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,.5)',
      marginBottom: 5,
  },
  description: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.5)',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
  }
});
