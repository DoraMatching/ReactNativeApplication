const Actions = {
  POST_BLOG: "POST_BLOG",

  POST_BLOG_SUCCEEDED: "POST_BLOG_SUCCEEDED",
  POST_BLOG_FAILED: "POST_BLOG_FAILED",

  postBlogAction: (params) => {
    return {
      type: Actions.POST_BLOG,
      params,
    };
  },

  postBlogSuccessAction: (data) => {
    return {
      type: Actions.POST_BLOG_SUCCEEDED,
      data,
    };
  },

  postBlogFailedAction: (error) => {
    return {
      type: Actions.POST_BLOG_FAILED,
      error,
    };
  },
};

export default Actions;
