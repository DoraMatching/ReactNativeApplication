import { connect } from "react-redux";
import { LoginScreen } from "./Login.screens";
import actions from "./Login.actions"
import { Field, reduxForm } from "redux-form";
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    onSubmitForm: ({ username, email, password, toggleCheckBox }) => {
      // console.log("onSubmitForm is called");
      dispatch(actions.loginUserAction({ username, email, password, toggleCheckBox }));
    },
    onSubmitGithubForm: () => {
      dispatch(actions.loginUserWithGitHubAction());
    },
  };
};

const mapStateToProps = (state) => {
  console.log("in map state To Prop", "YES");
  return {
    user: state.LoginReducer,
  };
};

const LoginForm = reduxForm({
  form: "login",
})(LoginScreen);

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginContainer;
