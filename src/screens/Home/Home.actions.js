const Actions = {
  GET_DATA: "GET_DATA",
  REFRESH_DATA:"REFRESH_DATA",
  GET_DATA_SUCCEEDED: "GET_DATA_SUCCEEDED",
  GET_DATA_FAILED: "GET_DATA_FAILED",
  REFRESH_DATA_SUCCEEDED: "GET_REFRESH_DATA_SUCCEEDED",
  REFRESH_DATA_FAILED: "GET_REFRESH_DATA_FAILED",
  OPEN_BLOG_DETAIL : "OPEN_BLOG_DETAIL",

  getDataAction: (params) => {
    return {
      type: Actions.GET_DATA,
      params,
    };
  },

  openBlogDetailAction: (data) => {
    return {
      type: Actions.OPEN_BLOG_DETAIL,
      data,
    }
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
