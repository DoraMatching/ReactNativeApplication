const Actions = {
    //GET_BLOG_TAG: "GET_BLOG_TAG",
    GET_PROFILE: "GET_PROFILE",
    //DELETE_BLOG: "DELETE_BLOG",
    // GET_BLOG_TAG_SUCCEEDED: "GET_BLOG_TAG_SUCCEEDED",
    // GET_BLOG_TAG_FAILED: "GET_BLOG_TAG_FAILED",
    GET_PROFILE_SUCCEEDED: "GET_PROFILE_SUCCEEDED",
    GET_PROFILE_FAILED: "GET_PROFILE_FAILED",
    GET_OPTION_MODAL : "GET_OPTION_MODAL",
    // DELETE_BLOG_SUCCEEDED: "DELETE_BLOG_SUCCEEDED",
    // DELETE_BLOG_FAILED: "DELETE_BLOG_FAILED",
  
    // getBlogTagAction: (params) => {
    //   return {
    //     type: Actions.GET_BLOG_TAG,
    //     params,
    //   };
    // },
    getProfileAction: (params) => {
      return {
        type: Actions.GET_PROFILE,
        params,
      };
    },

    getOptionModalAction: (params) => {
      return {
        type : Actions.GET_OPTION_MODAL,
        params,
      }
    },
  
    
  
    getProfileSuccessAction: (data, id) => {
      return {
        type: Actions.GET_PROFILE_SUCCEEDED,
        id,
        data,
      };
    },
  
    getProfileFailedAction: (error) => {
      return {
        type: Actions.GET_PROFILE_FAILED,
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
  
   
  };
  
  export default Actions;
  