const Actions = {
  GET_DATA: "GET_DATA",

  GET_DATA_SUCCEEDED: "GET_DATA_SUCCEEDED",
  GET_DATA_FAILED: "GET_DATA_FAILED",

  getDataAction: (params) => {
    return {
      type: Actions.GET_DATA,
      params,
    };
  },

  getDataSuccessAction: (data) => {
    return {
      type: Actions.GET_DATA_SUCCEEDED,
      data,
    };
  },

  getDataFailedAction: (error) => {
    return {
      type: Actions.GET_DATA_FAILED,
      error,
    };
  },
};

export default Actions;
