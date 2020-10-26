const Actions = {
  LOGIN_USER: "LOGIN_USER",
  LOGIN_WITH_GITHUB: "LOGIN_WITH_GITHUB",
  LOGIN_SUCCEEDED: "LOGIN_SUCCEEDED",
  LOGIN_FAILED: "LOGIN_FAILED",
  LOGIN_WITH_GITHUB_SUCCEEDED: "LOGIN_WITH_GITHUB_SUCCEEDED",
  LOGIN_WITH_GITHUB_FAILED: "LOGIN_WITH_GITHUB_FAILED",
  loginUserAction: (user) => {
    return {
      type: Actions.LOGIN_USER,
      user,
    };
  },

  loginUserWithGitHubAction: () => {
    return {
      type: Actions.LOGIN_WITH_GITHUB,
    };
  },

  loginSucessAction: (response) => {
    return {
      type: Actions.LOGIN_SUCCEEDED,
      response,
    };
  },

  loginFailedAction: (error) => {
    return {
      type: Actions.LOGIN_FAILED,
      error,
    };
  },

  loginWithGitHubSucessAction: (response) => {
    return {
      type: Actions.LOGIN_WITH_GITHUB_SUCCEEDED,
      response,
    };
  },

  loginWithGitHubFailedAction: (error) => {
    return {
      type: Actions.LOGIN_WITH_GITHUB_FAILED,
      error,
    };
  },
};

export default Actions;
