import React, {useState, Component, useEffect} from "react";
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
import {TagSelect} from "react-native-tag-select";
import _ from "lodash";
const QuestionInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, name, value, ...input},
    label,
    val,
    ...rest
  } = props;
  //console.log(`QuestionEdit Input ${name}`, value);
  //const [editingValue, setEditingValue] = useState(val);
  //console.log(name, editingValue);
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

let inn = false;
let count = 0;

const QuestionFormEditScreen = (props) => {
  //console.log("1. QuestionFormEdit props: ", props);
  //if (!props.edit) return (<></>);
  const {id, token, title, content, tags} = props.params;

  const tagRender = () => {
    return (
      tags &&
      tags.map((tag, index) => {
        return {id: tag.name.toLowerCase(), label: tag.name};
      })
    );
  };

  const [editingTitle, setEditingTitle] = useState(title);
  const [editingContent, setEditingContent] = useState(content);
  const items =
    tags &&
    tags.map((item) => {
      return {id: item.name.toLowerCase(), label: item.name};
    });
  const [selectItems, onSelectItemsChange] = useState(items);
  const [selectedItems, onSelectedItemsChange] = useState(tagRender());
  const [tag, setTagRef] = useState(null);
  const [tagName, setTagName] = useState("");

  const submit = (values) => {
    const tags = tag.itemsSelected.map((item) => {
      return {name: item.label};
    });
    props.onEditQuestion({id, token, isDraft: true, tags, ...values});
  };

  const onRemoveButton = async () => {
    //console.log("remove", tag.itemsSelected.map(item => item.id));
    onSelectItemsChange(
      selectItems.filter((item) => {
        return (
          tag.itemsSelected.length != 0 &&
          tag.itemsSelected.map((item) => item.id).indexOf(item.id) == -1
        );
      }),
    );
    onSelectedItemsChange([]);

    //console.log("tag in removeButton", tag);
  };

  const onRemove = (item) => {
      onSelectedItemsChange(selectedItems.filter((i) => i.id != item.id));
      onSelectItemsChange(selectItems.filter((i) => i.id != item.id));
  };

  if (props.data && props.data.success === true) {
    alert("Your Question Has Been Successfully Updated.");
    props.onClose();
  } else if (props.data.success === false) {
    alert(props.data.message);
  }
  useEffect(() => {
    if (tag)  tag.data = selectItems;
  }, [selectItems]);
  useEffect(() => {
    tag?.changeValue(selectedItems);
  }, [selectedItems]);
  const onItemPress = () => {
    onSelectItemsChange(tag.itemsSelected);
  }
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <Pressable onPress={Keyboard.dismiss} style={styles.layout}>
          <View style={styles.layout}>
            {/* <ScrollView> */}
            {console.log("is rendered")}
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Tag</Text>
            </View>
            <TagSelect
              value={selectedItems}
              data={selectItems}
              //onRemovee={onRemove}
              onItemPress={onItemPress}
              //max={3}
              ref={setTagRef}
            />
            <View style={{flexDirection: "row"}}>
              <TextInput
                style={{flex: 40, ...styles.textInput}}
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
                  const arr = [newTag, ...tag.itemsSelected];
                  //tag.setState({value : {[newTag.id] : newTag,...tag.state.value}});
                  console.log("arr", arr);
                  onSelectItemsChange(_.uniqBy(arr, "id"));
                  onSelectedItemsChange(_.uniqBy(arr, "id"));

                  setTagName("");
                }}
                style={[
                  styles.button,
                  {
                    fontSize: 15,
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    marginVertical: 5,
                    marginLeft: 5,
                    //height: 50,
                    //bottom: 10,
                    //flex : 30
                  },
                ]}>
                Add
              </Button>
              {/* <Button
                onPress={onRemoveButton}
                style={[
                  styles.button,
                  {
                    fontSize: 15,
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    marginVertical: 5,
                    //marginLeft: 5,
                    //height: 50,
                    //flex : 30,
                    //bottom: 10,
                  },
                ]}>
                Remove
              </Button> */}
            </View>
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
              Edit
            </Button>
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
    justifyContent: "flex-start",
    marginHorizontal: 10,
    //marginVertical: 10,
    marginTop: 30,
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
