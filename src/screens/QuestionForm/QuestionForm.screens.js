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
} from "react-native";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Button from "react-native-button";
import colors from "../../themes/color";
import MultiSelect from "react-native-multiple-select";
import TagSelect from "../../helpers/TagSelect";
import actions from "./QuestionForm.actions";
import tagPredictionActions from "../TagPrediction/TagPrediction.actions";
import _ from "lodash";
import {color} from "react-native-reanimated";

const QuestionInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, value, ...input},
    label,
    val,
    onEndEditing,
    ...rest
  } = props;
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
            onEndEditing={() => (onEndEditing ? onEndEditing(value) : () => {})}
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
  const [tag, setTagRef] = useState(null);
  const [tagName, setTagName] = useState("");

  const [selectItems, onSelectItemsChange] = useState([]);

  const [tagItems, onTagItemsChange] = useState([]);
  console.log("QuestionFormCompoent");
  const submit = (values) => {
    const tags = tag.itemsSelected.map((item) => {
      return {name: item.label};
    });
    console.log("QuestionFormScreen", values);
    props.onCreateQuestion({tags, token: props.token, ...values});
  };
  if (props.data && props.data.success === true) {
    alert("Your question has just been created !");
    props.onClose();
  } else if (props.data.success === false) {
    alert(props.data.message);
  }
  useEffect(() => {
    if (tag) tag.data = selectItems;
    tag?.changeValue(selectItems);
  }, [selectItems]);

  useEffect(() => {
    if (props.predictedTags[0] === "default") return;
    onSelectItemsChange([...props.predictedTags, ...tagItems]);

    console.log("predictedTags", props.predictedTags);
  }, [props.predictedTags]);

  useEffect(() => {
    if (props.predictedTags[0] === "default") return;
    console.log("useEffect", [...props.predictedTags, ...tagItems]);
    onSelectItemsChange([...props.predictedTags, ...tagItems]);

    console.log("tagItems", tagItems);
  }, [tagItems]);

  const onItemPress = () => {
    console.log("onItemPress");
    console.log("predictedTags", props.predictedTags);
    console.log("tagItems", tagItems);
    onSelectItemsChange(tag.itemsSelected);
  };
  const onPredict = (content) => {
    //console.log("content to predict", content);

    props.onPredictTags({content});
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <Pressable onPress={Keyboard.dismiss} style={styles.layout}>
          <View style={styles.layout}>
            {/* {console.log("selectedItems", selectedItems)} */}
            {tag && console.log("tag.itemsSelected", tag)}

            <View style={styles.labelContainer}>
              <Text style={styles.label}>Tag</Text>
            </View>
            <TagSelect
              value={selectItems}
              data={selectItems}
              //onRemovee={onRemove}
              onItemPress={onItemPress}
              //max={3}
              ref={setTagRef}
            />
            <View style={{flexDirection: "row", ...styles.textInput}}>
              <TextInput
                style={{flex: 30, ...styles.tagInput}}
                onChangeText={setTagName}
                //{...input}
                value={tagName}
                //{...rest}
                returnKeyType="next"
                autoCorrect={false}></TextInput>
              <Button
                onPress={() => {
                  console.log("onPressButton", tag);
                  if (!tagName) return;
                  const newTag = {id: tagName.toLowerCase(), label: tagName};
                  const arr = [newTag];
                  onTagItemsChange(_.uniqBy(arr, "id"));
                  setTagName("");
                }}
                style={[
                  styles.button,
                  {
                    fontSize: 15,
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                  },
                ]}>
                Add
              </Button>
            </View>

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
              onEndEditing={onPredict}
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
});

const QuestionForm = reduxForm({
  form: "question",
})(QuestionFormScreen);

const mapStateToProps = (state) => ({
  data: state.QuestionFormReducer,
  token: state.UserLoginReducer ? state.UserLoginReducer.token : "",
  predictedTags: state.TagPredictionReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateQuestion: (params) => {
      dispatch(actions.postQuestionAction(params));
    },
    onPredictTags: (params) => {
      dispatch(tagPredictionActions.postTagPredictionAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
