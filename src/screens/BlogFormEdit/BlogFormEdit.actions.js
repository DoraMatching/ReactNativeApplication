const Actions = {
  UPDATE_BLOG: "UPDATE_BLOG",
  EDIT_BLOG: "EDIT_BLOG",
  UPDATE_BLOG_SUCCEEDED: "UPDATE_BLOG_SUCCEEDED",
  UPDATE_BLOG_FAILED: "UPDATE_BLOG_FAILED",

  updateBlogAction: (params) => {
    return {
      type: Actions.UPDATE_BLOG,
      params,
    };
  },

  editBlogAction: (params) => {
    return {
      type: Actions.EDIT_BLOG,
      params,
    }
  },

  updateBlogSuccessAction: (data) => {
    return {
      type: Actions.UPDATE_BLOG_SUCCEEDED,
      data,
    };
  },

  updateBlogFailedAction: (error) => {
    return {
      type: Actions.UPDATE_BLOG_FAILED,
      error,
    };
  },
};

export default Actions;
