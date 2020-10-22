const Actions = {
  REGISTER_USER: "REGISTER_USER",
  REGISTER_SUCCEEDED: "REGISTER_SUCCEEDED",
  REGISTER_FAILED: "REGISTER_FAILED",

  registerUserAction: (user) => {
    // console.log("Login action", user);
    return {
      type: Actions.REGISTER_USER,
      user,
    };
  },

  registerSucessAction: (response) => {
    return {
      type: Actions.REGISTER_SUCCEEDED,
      response,
    };
  },

  registerFailedAction: (error) => {
    return {
      type: Actions.REGISTER_FAILED,
      error,
    };
  },
};

export default Actions;
