const Actions = {
    POST_BLOG_COMMENT: "POST_BLOG_COMMENT",
    POST_BLOG_COMMENT_SUCCEEDED: "POST_BLOG_COMMENT_SUCCEEDED",
    POST_BLOG_COMMENT_FAILED: "POST_BLOG_COMMENT_FAILED",

    postBlogCommentAction: (params) => {
      return {
        type: Actions.POST_BLOG_COMMENT,
        params,
      };
    },
    
    postBlogCommentSuccessAction: (data) => {
      return {
        type: Actions.POST_BLOG_COMMENT_SUCCEEDED,
        data,
      };
    },
  
    postBlogCommentFailedAction: (error) => {
      return {
        type: Actions.POST_BLOG_COMMENT_FAILED,
        error,
      };
    },

  };
  
  export default Actions;
  