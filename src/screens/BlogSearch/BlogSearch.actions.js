const Actions = {
  //GET_BLOG_TAG: "GET_BLOG_TAG",
  GET_BLOG_TOP: "GET_BLOG_TOP",
  DELETE_BLOG: "DELETE_BLOG",
  // GET_BLOG_TAG_SUCCEEDED: "GET_BLOG_TAG_SUCCEEDED",
  // GET_BLOG_TAG_FAILED: "GET_BLOG_TAG_FAILED",
  GET_BLOG_TOP_SUCCEEDED: "GET_BLOG_TOP_SUCCEEDED",
  GET_BLOG_TOP_FAILED: "GET_BLOG_TOP_FAILED",
  DELETE_BLOG_SUCCEEDED: "DELETE_BLOG_SUCCEEDED",
  DELETE_BLOG_FAILED: "DELETE_BLOG_FAILED",

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
};

export default Actions;
