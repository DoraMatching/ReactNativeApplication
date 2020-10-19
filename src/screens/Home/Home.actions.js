const Actions = {
    GET_BLOG : "GET_BLOG",
    GET_BLOG_SUCCEEDED: "GET_BLOG_SUCCEEDED",
    GET_BLOG_FAILED: "GET_BLOG_FAILED",
    getBlogsAction : (params) => {
      // console.log("in getBlogsAction");
        return {
          type: Actions.GET_BLOG,
          params,
        };
      },
      
    getBlogsSucessAction : (data) => {
    return {
        type: Actions.GET_BLOG_SUCCEEDED,
        data,
    };
    },
    
    getBlogsFailedAction : (error) => {
        return {
          type: Actions.GET_BLOG_FAILED,
          error,
        };
      },
};

export default Actions;