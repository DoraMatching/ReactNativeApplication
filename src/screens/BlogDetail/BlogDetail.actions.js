const Actions = {
    POST_BLOG_COMMENT: "POST_BLOG_COMMENT",
    PATCH_BLOG_COMMENT: "PATCH_BLOG_COMMENT",
    POST_BLOG_COMMENT_SUCCEEDED: "POST_BLOG_COMMENT_SUCCEEDED",
    POST_BLOG_COMMENT_FAILED: "POST_BLOG_COMMENT_FAILED",
    PATCH_BLOG_COMMENT_SUCCEEDED: "PATCH_BLOG_COMMENT_SUCCEEDED",
    PATCH_BLOG_COMMENT_FAILED: "PATCH_BLOG_COMMENT_FAILED",

    postBlogCommentAction: (params) => {
      return {
        type: Actions.POST_BLOG_COMMENT,
        params,
      };
    },

    patchBlogCommentAction: (params) => {
      return {
        type: Actions.PATCH_BLOG_COMMENT,
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

    patchBlogCommentSuccessAction: (data, blogID) => {
      return {
        type: Actions.PATCH_BLOG_COMMENT_SUCCEEDED,
        blogID,
        data,
      };
    },
  
    patchBlogCommentFailedAction: (error) => {
      return {
        type: Actions.PATCH_BLOG_COMMENT_FAILED,
        error,
      };
    },

  };
  
  export default Actions;
  