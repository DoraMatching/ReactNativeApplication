const Actions = {
    GET_BLOG_TAG: "GET_BLOG_TAG",
    GET_BLOG_TOP: "GET_BLOG_TOP",
    GET_BLOG_TAG_SUCCEEDED: "GET_BLOG_TAG_SUCCEEDED",
    GET_BLOG_TAG_FAILED: "GET_BLOG_TAG_FAILED",
    GET_BLOG_TOP_SUCCEEDED: "GET_BLOG_TOP_SUCCEEDED",
    GET_BLOG_TOP_FAILED: "GET_BLOG_TOP_FAILED",

    getBlogTagAction: (params) => {
      return {
        type: Actions.GET_BLOG_TAG,
        params,
      };
    },
    getBlogTopAction: (params) => {
      return {
        type: Actions.GET_BLOG_TOP,
        params,
      };
    },
  
    getBlogTagSuccessAction: (data) => {
      return {
        type: Actions.GET_BLOG_TAG_SUCCEEDED,
        data,
      };
    },
  
    getBlogTagFailedAction: (error) => {
      return {
        type: Actions.GET_BLOG_TAG_FAILED,
        error,
      };
    },

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
  