import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import actions from "./Register.actions"
import RegisterScreen from "./Register.screens";

const validate = values => {
  const errors = {};
  
  if (!values.confirmPassword ) {
    errors.confirmPassword = 'The field is required' ;
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password mismatched' ;
  }

    return errors;


};

const mapStateToProps = (state) => {
  return {
    user: state.RegisterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({ username, email, password }) => {
      dispatch(actions.registerUserAction({ username, email, password }));
    },
  };
};

const RegisterForm = reduxForm({
  form: "register",
  validate,
})(RegisterScreen);

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

export default RegisterContainer;
