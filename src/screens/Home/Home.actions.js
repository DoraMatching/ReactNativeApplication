const Actions = {
  GET_DATA: "GET_DATA",
  REFRESH_DATA:"REFRESH_DATA",
  GET_DATA_SUCCEEDED: "GET_DATA_SUCCEEDED",
  GET_DATA_FAILED: "GET_DATA_FAILED",
  REFRESH_DATA_SUCCEEDED: "GET_REFRESH_DATA_SUCCEEDED",
  REFRESH_DATA_FAILED: "GET_REFRESH_DATA_FAILED",

  getDataAction: (params) => {
    return {
      type: Actions.GET_DATA,
      params,
    };
  },

  getRefreshDataAction: (params) => {
    return {
      type: Actions.REFRESH_DATA,
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

  getRefreshDataSuccessAction: (data) => {
    return {
      type: Actions.REFRESH_DATA_SUCCEEDED,
      data,
    };
  },

  getRefreshDataFailedAction: (error) => {
    return {
      type: Actions.REFRESH_DATA_FAILED,
      error,
    };
  },
};

export default Actions;
