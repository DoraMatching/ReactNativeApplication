import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {Field} from "redux-form";
import EditText from "../../components/EditText";

//Validation
const required = (value) => {
  console.log("validate username", value);
  return value ? undefined : "The field is required";
};
const isValidEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const RegisterScreen = ({handleSubmit, onSubmit, user, navigation}) => {
  const submit = (values) => {
    console.log("register", values);
    const {username, email, phoneNumber, password} = values;
    const newUsername = username.toLowerCase();
    onSubmit({username: newUsername, email, password});
  };

  if (user.success === true) {
    alert(
      "Registration successful",
      [
        {
          text: "Go back to Login screen",
          onPress: () => navigation.navigate("Login"),
        },
      ],
      {cancelable: false},
    );
    navigation.navigate("Login");
  } else if (user.success === false) {
    alert(user.message);
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.authorizeLayout}>
          <Text style={styles.signUpText}>Sign up</Text>

          <View style={{marginBottom: 20}}>
            <Field
              name={"username"}
              props={{
                placeholder: "Username",
                returnKeyType: "next",
                autoCorrect: false,
              }}
              component={EditText}
              validate={required}
            />
            <Field
              name={"email"}
              props={{
                placeholder: "Email",
                keyboardType: "email-address",
                returnKeyType: "next",
                autoCorrect: false,
              }}
              component={EditText}
              validate={isValidEmail}
            />

            <Field
              name={"password"}
              props={{
                placeholder: "Password",
                secureTextEntry: true,
                returnKeyType: "next",
                autoCorrect: false,
              }}
              component={EditText}
              validate={required}
            />
            <Field
              name={"confirmPassword"}
              props={{
                placeholder: "Confirm password",
                secureTextEntry: true,
                returnKeyType: "go",
                autoCorrect: false,
              }}
              component={EditText}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "blueviolet",
                height: 45,
                borderRadius: 5,
                marginTop: 20,
              }}
              onPress={handleSubmit(submit)}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  authorizeLayout: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-around",
  },
  signUpText: {
    fontSize: 36,

    color: "blueviolet",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});

export default RegisterScreen;
