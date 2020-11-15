import React, {useState} from "react";
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
import {TagSelect} from "react-native-tag-select";
import _ from "lodash";
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
  const [avatar, setAvatar] = useState(defaultImage);
  const [selectedItems, onSelectedItemsChange] = useState([]);
  const [tag, setTagRef] = useState(null);
  const [tagName, setTagName] = useState("");
  //const [isHidden, setHidden] = useState(true);

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
    const tags = tag.itemsSelected.map((item) => {
      return {name: item.label};
    });
    const featuredImage =
      "https://www.pixelrockstar.com/wp-content/uploads/2017/04/featured-image.png";
    props.onCreateBlog({tags, featuredImage, token: props.token, ...values});
    console.log("BlogFormScreen", props.data);
  };

  if (props.data && props.data.success === true) {
    alert("Your blog has just been created !");
    props.onClose();
  } else if (props.data.success === false) {
    alert(props.data.message);
  }

  const onRemoveButton = () => {
    console.log("onRemoveButton", tag);
    tag.setState({value: {}});
    onSelectedItemsChange(_.difference(selectedItems, tag.itemsSelected));
    //setRemovedItem(null);
    //setHidden(true);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, paddingHorizontal: 10, paddingTop: 40}}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss;
        }}>
        <>
          <ScrollView>
          <TagSelect
              data={selectedItems}
              //onItemPress={onItemPress}
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
                  const arr = [newTag, ...selectedItems];
                  //tag.setState({value : {[newTag.id] : newTag,...tag.state.value}});
                  console.log("arr", arr);
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
              <Button
                onPress={onRemoveButton}
                style={[
                  styles.button,
                  {
                    fontSize: 15,
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    marginVertical: 5,
                    marginLeft: 5,
                    //height: 50,
                    //flex : 30,
                    //bottom: 10,
                  },
                ]}>
                Remove
              </Button>
            </View>
            <Field
              name={"title"}
              placeholder={"Type your title here ..."}
              component={BlogInput}
              validate={required}
              styles={styles.title}
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
              styles={styles.description}
            />
            <Pressable style={styles.featuredImage}>
              <Image
                source={avatar}
                PlaceholderContent={<ActivityIndicator />}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                  resizeMode: "cover",
                }}
              />

              <Pressable style={styles.overlay}>
                <Text style={styles.editLabel} onPress={handlePicker}>
                  Edit your featured image
                </Text>
              </Pressable>
            </Pressable>
            <Field
              name={"content"}
              props={{
                multiline: true,
                numberOfLines: 5,
              }}
              placeholder={"Your content is here ..."}
              component={BlogInput}
              validate={required}
              styles={styles.description}
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
      </Pressable>
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
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,.5)",
    marginBottom: 5,
  },
  description: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.5)",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
    textAlignVertical: "top",
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
  textInput: {
    backgroundColor: "#f0f2f5",
    borderRadius: 5,
    marginVertical: 5,
    borderColor: "lightgray",
    borderWidth: 1,
    color: "black",
    textAlignVertical: "top",
  }
});
