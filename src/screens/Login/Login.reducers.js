import Actions from "./Login.actions";
const LoginReducer = (user = {success: null, message: null}, action) => {
  switch (action.type) {
    case Actions.LOGIN_SUCCEEDED:
    case Actions.LOGIN_WITH_GITHUB_SUCCEEDED:
      //console.log("Login_succeeded in LoginReducer.js", action.response);
      return {success: true, message: action.response};
    case Actions.LOGIN_FAILED:
    case Actions.LOGIN_WITH_GITHUB_FAILED:
      //console.log("Login_failed in LoginReducer.js", action.error);
      return {success: false, message: action.error};
    default:
      return {success: null, message: null};
  }
};
const UserLoginReducer = (user = null, action) => {
  switch (action.type) {
    case Actions.LOGIN_SUCCEEDED:
    case Actions.LOGIN_WITH_GITHUB_SUCCEEDED:
      //console.log("Login_succeeded in LoginReducer.js", action.response);
      return action.response;
    case Actions.LOGIN_FAILED:
    case Actions.LOGIN_WITH_GITHUB_FAILED:
      //console.log("Login_failed in LoginReducer.js", action.error);
      return user;
    default:
      return user;
  }
};
export { LoginReducer, UserLoginReducer};
