import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import ImagePicker from "react-native-image-picker";
import {Image} from "react-native-elements";
import Button from "react-native-button";
import colors from "../../themes/color";
import Icon from "react-native-vector-icons/Ionicons";
import actions from "./ProfileEdit.actions";
const ProfileEditInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, name, ...input},
    label,
    styles,
    val,
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
        {...(val && {value: val})}
        {...rest}
        returnKeyType="next"
        autoCorrect={false}></TextInput>
    </>
  );
};

// const ProfileInfoEdit = (props) => {
//   if (!props.data) return <></>;
//   const {username, name, email, roles, avatarUrl} = props.data;
//   const [nameEdit, setNameEdit] = useState(name);
//   const submit = (values) => {
//     const {id, token} = props.data;
//     props.onEditProfile({id, token, ...values});

//     //console.log("BlogFormScreen", values);
//   };
//   return (
//     <>
//       <Field
//         name={"name"}
//         onChange={setNameEdit}
//         props={{
//           //secureTextEntry: true,
//           returnKeyType: "next",
//           // multiline: true,
//           // numberOfLines: 5,
//         }}
//         placeholder={"Name"}
//         component={ProfileEditInput}
//         val={nameEdit}
//         //validate={required}
//         styles={styles.input}
//       />
//       <Field
//         name={"phoneNumber"}
//         props={{
//           //secureTextEntry: true,
//           returnKeyType: "next",
//           // multiline: true,
//           // numberOfLines: 5,
//         }}
//         placeholder={"Phone number"}
//         component={ProfileEditInput}
//         //validate={required}
//         styles={styles.input}
//       />
//       <Button style={styles.saveButton} onPress={props.handleSubmit(submit)}>
//         Save
//       </Button>
//     </>
//   );
// };

// const ProfileInfoEditForm = reduxForm({
//   form: "profileInfo",
// })(ProfileInfoEdit);
// const ProfileInfoForm = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ProfileInfoEditForm);

const ProfileEdit = (props) => {
  if (!props.data) return <></>;
  const {username, name, email, roles, avatarUrl, phoneNumber} = props.data;
  const defaultImage = {
    uri: avatarUrl,
  };
  const [avatar, setAvatar] = useState(defaultImage);
  const [nameEdit, setNameEdit] = useState(name);
  const [phoneNumberEdit, setPhoneNumberEdit] = useState(phoneNumber);
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
    const {id, token} = props.data;
    props.onEditProfile({id, token, ...values});

    //console.log("BlogFormScreen", values);
  };
  console.log("props in profile edit", props);
  if (props.response && props.response.success === true) {
    alert("Your Profile Has Just Been Successfully Updated");
    //props.onClose();
    props.reset();
  } else if (props.data.success === false) {
    alert(props.data.message);
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Pressable
        style={{flex: 1, justifyContent: "flex-end"}}
        onPress={Keyboard.dismiss}>
        <View style={styles.infoLayout}>
          <View>
            <Image
              source={avatar}
              PlaceholderContent={<ActivityIndicator />}
              style={styles.avatar}
            />
            <Pressable style={styles.camera} onPress={handlePicker}>
              <Icon name="camera" size={25} color="#606770" />
            </Pressable>
          </View>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.role}>{roles.join(" - ")}</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Field
            name={"name"}
            onChange={setNameEdit}
            props={{
              //secureTextEntry: true,
              returnKeyType: "next",
              // multiline: true,
              // numberOfLines: 5,
            }}
            placeholder={"Name"}
            component={ProfileEditInput}
            val={nameEdit}
            //validate={required}
            styles={styles.input}
          />
          <Field
            name={"phoneNumber"}
            onChange={setPhoneNumberEdit}
            props={{
              //secureTextEntry: true,
              returnKeyType: "next",
              // multiline: true,
              // numberOfLines: 5,
            }}
            placeholder={"Phone number"}
            val={phoneNumberEdit}
            component={ProfileEditInput}
            //validate={required}
            styles={styles.input}
          />
          <Button
            containerStyle={styles.containerButton}
            style={styles.saveButton}
            onPress={props.handleSubmit(submit)}>
            Save
          </Button>
          <Text style={styles.label}>Change password</Text>
          <Field
            name={"oldPassword"}
            props={{
              secureTextEntry: true,
              returnKeyType: "next",
              // multiline: true,
              // numberOfLines: 5,
            }}
            placeholder={"Old password"}
            component={ProfileEditInput}
            //validate={required}
            styles={styles.input}
          />
          <Field
            name={"password"}
            props={{
              secureTextEntry: true,
              returnKeyType: "next",
              // multiline: true,
              // numberOfLines: 5,
            }}
            placeholder={"New password"}
            component={ProfileEditInput}
            //validate={required}
            styles={styles.input}
          />
          <Field
            name={"confirmPassword"}
            props={{
              secureTextEntry: true,
              //returnKeyType: "next",
              // multiline: true,
              // numberOfLines: 5,
            }}
            placeholder={"Confirm new password"}
            component={ProfileEditInput}
            //validate={required}
            styles={styles.input}
          />
          <Button
            containerStyle={styles.containerButton}
            style={styles.saveButton}
            onPress={props.handleSubmit(submit)}>
            Save
          </Button>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 1000,
    resizeMode: "cover",
    borderRadius: 1000,
    marginRight: 10,
    borderColor: "#c4c4c4",
    borderWidth: 0.5,
  },
  camera: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  infoLayout: {
    justifyContent: "center",
    alignItems: "center",
    flex: 30,
  },
  inputContainer: {
    marginHorizontal: 10,
    flex: 70,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 10,
    color: "white",
    width: 60,
    fontSize: 16,
    borderRadius: 5,
    marginVertical: 5,
    // marginHorizontal: 10,
    
  },
  containerButton: {
    alignSelf: "flex-end",
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
  },
  role: {},
  email: {},
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.5)",
    borderRadius: 5,
    paddingHorizontal: 5,
    //marginBottom: 5,
    //textAlignVertical: "top",
  },

  errorText: {
    //textAlign: "right",
    flex: 80,
    textAlign: "right",
    // borderWidth: 1,
    // borderColor: "black",
  },
});

const validate = (values) => {
  const errors = {};
  //if (value.name)
  // if (!values.oldPassword) {
  //   errors.oldPassword = "The field is required";
  // }
  // if (!values.password) {
  //   errors.password = "The field is required";
  // }
  // if (!values.confirmPassword) {
  //   errors.confirmPassword = "The field is required";
  // } else 
  console.log("old password: ", values.oldPassword);
  if ((!values.oldPassword || typeof values.oldPassword === "undefined") && values.password){
      console.log("inside if block");
      errors.password = "The Old Password field must not be blank";
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password mismatched";
  }

  return errors;
};

const ProfileEditForm = reduxForm({
  form: "profile",
  validate,
})(ProfileEdit);

const mapStateToProps = (state) => ({
  data: state.UserLoginReducer,
  response: state.ProfileEditReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onEditProfile: (params) => {
      dispatch(actions.updateProfileAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);
