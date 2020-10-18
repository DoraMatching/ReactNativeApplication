import React, { Component, useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { GitHubSocialButton } from "react-native-social-buttons";
import Svg, { Line } from "react-native-svg";
import EditText from "../../components/EditText";

export const LoginScreen = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { navigation } = props;
  const submit = (values) => {
    const { usernameOrEmail, password } = values;
    /*console.log("Usernameoremail", usernameOrEmail);
    console.log("Password", password);
    console.log("submit", values);*/
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(usernameOrEmail)) {
      props.onSubmitForm({
        username: null,
        email: usernameOrEmail,
        password: password,
        toggleCheckBox: toggleCheckBox,
      });
    } else {
      props.onSubmitForm({
        username: usernameOrEmail,
        email: null,
        password: password,
        toggleCheckBox: toggleCheckBox,
      });
    }
  };
  const { handleSubmit } = props;
  console.log("login.screen.js: props.user = ",props.user);
  if (props.user && props.user.success === true) {
    console.log("login", props.user);
    navigation.navigate("Home");
    // alert("Sign in successfully");
  } else if (props.user.success === false) alert(props.user.message);
  return (
    <View style={styles.authorizeLayout}>
      <Text style={styles.signInText}>Sign in</Text>
      <Field
        name={"usernameOrEmail"}
        props={{
          placeholder: "Username or Email",
        }}
        component={EditText}
      />
      <Field
        name={"password"}
        props={{
          placeholder: "Password",
          secureTextEntry: true,
        }}
        component={EditText}
      />
      <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
      <View style={{ flexDirection: "row" }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={{ textAlignVertical: "center" }}>Remember me</Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blueviolet",
          height: 45,
          borderRadius: 5,
          marginTop: 30,
        }}
        onPress={handleSubmit(submit)}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <Svg width="100" height="2">
          <Line x1="0" y1="0" x2="100" y2="0" stroke="black" />
        </Svg>
        <Text
          style={{
            paddingStart: 10,
            paddingEnd: 10,
            fontWeight: "bold",
          }}
        >
          OR
        </Text>
        <Svg height="2" width="100">
          <Line x1="0" y1="0" x2="100" y2="0" stroke="black" />
        </Svg>
      </View>
      <GitHubSocialButton
        buttonViewStyle={{
          height: 45,
          marginLeft: 0,
          width: "100%",
          borderRadius: 5,
        }}
        onPress={() => {
          props.onSubmitGithubForm();
        }}
      ></GitHubSocialButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          marginTop: 30,
        }}
      >
        <Text>Don't have an account ? </Text>
        <Text
          style={styles.signUpText}
          onPress={() => navigation.navigate("Register")}
        >
          Sign up here
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  authorizeLayout: {
    flex: 1,
    flexDirection: "column",
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "flex-start",
  },
  signInText: {
    fontSize: 36,
    marginBottom: 100,
    marginTop: 40,
    color: "blueviolet",
  },
  forgotPasswordText: {
    textAlign: "right",
    fontSize: 13,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  signUpText: {
    color: "blueviolet",
  },
});
