const Actions = {
  GET_PROFILE_INFO: "GET_PROFILE_INFO",

  GET_PROFILE_INFO_SUCCEEDED: "GET_PROFILE_INFO_SUCCEEDED",
  GET_PROFILE_INFO_FAILED: "GET_PROFILE_INFO_FAILED",

  getProfileAction: (params) => {
    return {
      type: Actions.GET_PROFILE_INFO,
      params,
    };
  },

  getProfileSuccessAction: (data, id) => {
    return {
      type: Actions.GET_PROFILE_INFO_SUCCEEDED,
      id,
      data,
    };
  },

  getProfileFailedAction: (error) => {
    return {
      type: Actions.GET_PROFILE_INFO_FAILED,
      error,
    };
  },
};

export default Actions;