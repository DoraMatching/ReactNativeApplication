import React, {useState, Component, useEffect} from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  ActivityIndicator,
  Pressable,
} from "react-native";
import {Field, reduxForm} from "redux-form";
import colors from "../../themes/color";
import Button from "react-native-button";
import ImagePicker from "react-native-image-picker";
import {Image} from "react-native-elements";
import defaultImage from "../../images/BlogFeaturedImage.png";
import TagSelect from "../../helpers/TagSelect";
import { connect } from 'react-redux'

import actions from "./TrainerRegister.actions";
import _ from "lodash";

//Validation
const required = (value) => {
  //console.log("validate username", value);
  return value ? undefined : "The field is required";
};

const RegisterInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, name, value, ...input},
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

const TrainerRegisterScreen = (props) => {
    const submit = (values) => {
        props.onCreateTrainer({token: props.token, ...values});
        console.log("Trainer register", values);
    }
    if (props.data && props.data.success === true) {
      alert("Register completed successfully ! Please logout and login again");
      props.onClose();
    } else if (props.data.success === false) {
      alert(props.data.message);
    } 
  return (
    <View style={{alignItems: "stretch"}}>
      <Field
        name={"trainerProfile"}
        props={{}}
        placeholder={"Put your link here ..."}
        component={RegisterInput}
        validate={required}
        styles={styles.input}
      />
      <Button
        onPress={props.handleSubmit(submit)}
        style={[
          styles.button,
          {fontSize: 18, paddingVertical: 10, marginVertical: 5},
        ]}>
        Create
      </Button>
    </View>
  );
};

const TrainerRegisterForm = reduxForm({
  form: "trainerRegister",
})(TrainerRegisterScreen);

const mapStateToProps = (state) => ({
  data: state.TrainerRegisterReducer,
  token: state.UserLoginReducer ? state.UserLoginReducer.token : "",
});

const mapDispatchToProps = (dispatch) => {
    return {
      onCreateTrainer: (params) => {
        dispatch(actions.postTrainerRegisterAction(params));
      },
    //   onPredictTags: (params) => {
    //     dispatch(tagPredictionActions.postTagPredictionAction(params));
    //   },
    };
  };

const styles = StyleSheet.create({
  errorText: {
    //textAlign: "right",
    width: "100%",
    height: 5,
    textAlign: "right",
    borderWidth: 1,
    borderColor: "transparent",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.5)",
    borderRadius: 5,
    paddingHorizontal: 5,
    //marginBottom: 5,
    //textAlignVertical: "top",
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainerRegisterForm);


