import React, {useState, useEffect} from "react";
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
    input: {onChange, name, value, ...input},
    label,
    val,
    styles,
    ...rest
  } = props;
  console.log(`BlogEdit Input ${name}`, value);
  //const [editingValue, setEditingValue] = useState(val);
  //console.log(name, editingValue);
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
        value={val}
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
  props.onFetchBlogDetail({id : props.id, token : props.token});
  if (!props.params) return <></>;
  const {id, title, subTitle, content, tags, featuredImage} = props.params;
  const defaultImage = {
    uri: featuredImage,
  };
  const [avatar, setAvatar] = useState(defaultImage);
  //const [isHidden, setHidden] = useState(true);

  console.log("BlogFormEdit props: ", props);
  //if (!props.edit) return (<></>);
  

  const tagRender = () => {
    return (
      tags &&
      tags.map((tag, index) => {
        return {id: tag.name.toLowerCase(), label: tag.name};
      })
    );
  };

  const items =
    tags &&
    tags.map((item) => {
      return {id: item.name.toLowerCase(), label: item.name};
    });
  const [selectItems, onSelectItemsChange] = useState(items);
  const [selectedItems, onSelectedItemsChange] = useState(tagRender());
  const [tag, setTagRef] = useState(null);
  const [tagName, setTagName] = useState("");

  const [editingTitle, setEditingTitle] = useState(title);
  const [editingSubTitle, setEditingSubTitle] = useState(subTitle);
  const [editingContent, setEditingContent] = useState(content);

  //console.log("blogform screen", props);
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
    // const tags = [
    //   {
    //     name: "java",
    //   },
    // ];
    // const featuredImage =
    //   "https://www.pixelrockstar.com/wp-content/uploads/2017/04/featured-image.png";
    // props.onCreateBlog({tags, featuredImage, token: props.token, ...values});
    const tags = tag.itemsSelected.map((item) => {
      return {name: item.label};
    });
    console.log("BlogFormEditScreen", values);
    props.onEditBlog({id, token, isDraft: true, tags, ...values});
    // if (props.data && props.data.success === true) {
    //   alert("Your blog has just been created !");
    //   props.onClose();
    // } else if (props.data.success === false) {
    //   alert(props.data.message);
    // }
  };

  if (props.data && props.data.success === true) {
    alert("Your Blog Has Been Successfully Updated.");
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
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, paddingHorizontal: 10, paddingTop: 40}}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss;
          //setHidden(true);
        }}>
        <>
          <ScrollView>
            <Field
              name={"title"}
              placeholder={"Type your title here ..."}
              component={BlogInput}
              //validate={required}
              onChange={setEditingTitle}
              styles={styles.title}
              val={editingTitle}
            />
             <TagSelect
              value={selectedItems}
              data={selectItems}
              //onRemovee={onRemove}
              onItemPress={onItemPress}
              //max={3}
              ref={setTagRef}
              containerStyle={{marginTop : 5}}
            />
            <View style={{flexDirection: "row", ...styles.textInput}}>
              <TextInput
                style={{flex: 30, ...styles.tagInput}}
                onChangeText={setTagName}
                //{...input}
                value={tagName}
                placeholder={"Type your tag here ..."}
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
                    paddingHorizontal: 20,
                    //marginVertical: 5,
                    //marginLeft: 5,
                    //height: 50,
                    //bottom: 10,
                    //flex : 40
                  },
                ]}>
                Add
              </Button>
            </View>
            <Field
              name={"subTitle"}
              props={{
                multiline: true,
                numberOfLines: 5,
              }}
              placeholder={"Your description is here ..."}
              component={BlogInput}
              //validate={required}
              styles={styles.description}
              onChange={setEditingSubTitle}
              val={editingSubTitle}
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
              //validate={required}
              styles={styles.description}
              onChange={setEditingContent}
              val={editingContent}
            />

            <Button
              onPress={props.handleSubmit(submit)}
              style={[
                styles.button,
                {fontSize: 18, paddingVertical: 10, marginVertical: 5},
              ]}>
              Edit
            </Button>
          </ScrollView>
        </>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export const BlogEditForm = reduxForm({
  form: "blogEdit",
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
  },
  tagInput : {
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
