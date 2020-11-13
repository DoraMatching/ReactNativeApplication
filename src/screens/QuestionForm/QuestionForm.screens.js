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
import MultiSelect from "react-native-multiple-select";
import actions from "./QuestionForm.actions";

const QuestionInput = (props) => {
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

const QuestionFormScreen = (props) => {
  const [selectedItems, onSelectedItemsChange] = useState([]);
  const [multiSelect, setMultiSelectRef] = useState(null);
  const submit = (values) => {
    const tags = [
      {
        name: "java",
      },
    ];
    console.log("QuestionFormScreen", values);
    props.onCreateQuestion({tags, token: props.token, ...values});
    //console.log("BlogFormScreen", values);
    
  };
  if (props.data && props.data.success === true) {
    alert("Your question has just been created !");
    props.onClose();
  } else if (props.data.success === false) {
    alert(props.data.message);
  }
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

const QuestionForm = reduxForm({
  form: "question",
})(QuestionFormScreen);

const mapStateToProps = (state) => ({
  data: state.QuestionFormReducer,
  token: state.LoginReducer ? state.LoginReducer.message.token : "",
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateQuestion: (params) => {
      dispatch(actions.postQuestionAction(params));
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
