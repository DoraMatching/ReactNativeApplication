import Actions from "./Register.actions";
const RegisterReducer = (users = [], action) => {
  //console.log("RegisterReducer.js", "OK");
  switch (action.type) {
    case Actions.REGISTER_SUCCEEDED:
      //console.log("Register_succeeded in RegisterReducer.js", action.response);
      return {success: true, message: action.response};
    case Actions.REGISTER_FAILED:
      //console.log("Register_failed in RegisterReducer.js", action.error);
      return {success: false, message: action.error};
    default:
      return {success: null, message: null};
  }
};
export default RegisterReducer;
