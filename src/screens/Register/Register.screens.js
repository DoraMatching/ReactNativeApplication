import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import EditText from "../../components/EditText";

//Validation
const required = value => {
  console.log("validate username", value);
  return value ? undefined : 'The field is required';
}
const isValidEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;



const RegisterScreen = ({handleSubmit, onSubmit, user, navigation}) => {
  const submit = values => {
      console.log("register", values);
      const {username, email, phoneNumber, password} = values;
      const newUsername = username.toLowerCase();
      onSubmit({username : newUsername, email, password});
  };
  
  if (user.success === true){
    alert(
      "Registration successful",
      [
        {
          text: "Go back to Login screen",
          onPress: () => navigation.navigate("Login"),
        },
        
      ],
      { cancelable: false }
    );
    navigation.navigate("Login");
  }
  else if (user.success === false){
    alert(user.message);
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.authorizeLayout}>
    <TouchableWithoutFeedback  
                          onPress={Keyboard.dismiss}>
    <View >
      <Text style={styles.signUpText}>Sign up</Text>
     
            
              <Field
                name={"username"}
                props={{
                  placeholder: "Username",
                }}
                component={EditText}
                validate = {required}
              />
              <Field
                name={"email"}
                props={{
                  placeholder: "Email",
                  keyboardType: "email-address",
                }}
                component={EditText}
                validate = {isValidEmail}
              />
              <Field
                name={"phoneNumber"}
                props={{
                  placeholder: "Phone number",
                  keyboardType: "phone-pad",
                }}
                component={EditText}
                name="Phone number"
              />
              <Field
                name={"password"}
                props={{
                  placeholder: "Password",
                  secureTextEntry: true,
                }}
                component={EditText}
                validate = {required}
              />
              <Field
                name={"confirmPassword"}
                props={{
                  placeholder: "Confirm password",
                  secureTextEntry: true,
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
                  marginTop: 30,
                }}
                onPress={handleSubmit(submit)}
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              
          
    </View>
    </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  signUpText: {
    fontSize: 36,
    marginBottom: 100,
    marginTop: 40,
    color: "blueviolet",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});

export default RegisterScreen;
