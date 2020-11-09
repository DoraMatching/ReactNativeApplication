const Actions = {
  //GET_BLOG_TAG: "GET_BLOG_TAG",
  GET_BLOG_TOP: "GET_BLOG_TOP",
  DELETE_BLOG: "DELETE_BLOG",
  REFRESH_DATA:"REFRESH_DATA",
  // GET_BLOG_TAG_SUCCEEDED: "GET_BLOG_TAG_SUCCEEDED",
  // GET_BLOG_TAG_FAILED: "GET_BLOG_TAG_FAILED",
  GET_BLOG_TOP_SUCCEEDED: "GET_BLOG_TOP_SUCCEEDED",
  GET_BLOG_TOP_FAILED: "GET_BLOG_TOP_FAILED",
  DELETE_BLOG_SUCCEEDED: "DELETE_BLOG_SUCCEEDED",
  DELETE_BLOG_FAILED: "DELETE_BLOG_FAILED",
  REFRESH_DATA_SUCCEEDED: "GET_REFRESH_DATA_SUCCEEDED",
  REFRESH_DATA_FAILED: "GET_REFRESH_DATA_FAILED",

  // getBlogTagAction: (params) => {
  //   return {
  //     type: Actions.GET_BLOG_TAG,
  //     params,
  //   };
  // },
  getBlogTopAction: (params) => {
    return {
      type: Actions.GET_BLOG_TOP,
      params,
    };
  },

  getRefreshDataAction: (params) => {
    return {
      type: Actions.REFRESH_DATA,
      params,
    };
  },

  deleteBlogAction: (params) => {
    return {
      type: Actions.DELETE_BLOG,
      params,
    };
  },

  deleteBlogSuccessAction: (data, id) => {
    return {
      type: Actions.DELETE_BLOG_SUCCEEDED,
      id,
      data,
    };
  },

  deleteBlogFailedAction: (error) => {
    return {
      type: Actions.DELETE_BLOG_FAILED,
      error,
    };
  },
  // getBlogTagSuccessAction: (data) => {
  //   return {
  //     type: Actions.GET_BLOG_TAG_SUCCEEDED,
  //     data,
  //   };
  // },

  // getBlogTagFailedAction: (error) => {
  //   return {
  //     type: Actions.GET_BLOG_TAG_FAILED,
  //     error,
  //   };
  // },

  getBlogTopSuccessAction: (data) => {
    return {
      type: Actions.GET_BLOG_TOP_SUCCEEDED,
      data,
    };
  },

  getBlogTopFailedAction: (error) => {
    return {
      type: Actions.GET_BLOG_TOP_FAILED,
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
