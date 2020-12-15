const Actions = {
    //EDIT_BLOG_TAG: "EDIT_BLOG_TAG",
    UPDATE_PROFILE: "UPDATE_PROFILE",
    //DELETE_BLOG: "DELETE_BLOG",
    // EDIT_BLOG_TAG_SUCCEEDED: "EDIT_BLOG_TAG_SUCCEEDED",
    // EDIT_BLOG_TAG_FAILED: "EDIT_BLOG_TAG_FAILED",
    UPDATE_PROFILE_SUCCEEDED: "UPDATE_PROFILE_SUCCEEDED",
    UPDATE_PROFILE_FAILED: "UPDATE_PROFILE_FAILED",
    // DELETE_BLOG_SUCCEEDED: "DELETE_BLOG_SUCCEEDED",
    // DELETE_BLOG_FAILED: "DELETE_BLOG_FAILED",
  
    // EDITBlogTagAction: (params) => {
    //   return {
    //     type: Actions.EDIT_BLOG_TAG,
    //     params,
    //   };
    // },
    updateProfileAction: (params) => {
      return {
        type: Actions.UPDATE_PROFILE,
        params,
      };
    },
  
    
  
    updateProfileSuccessAction: (data, id) => {
      return {
        type: Actions.UPDATE_PROFILE_SUCCEEDED,
        id,
        data,
      };
    },
  
    updateProfileFailedAction: (error) => {
      return {
        type: Actions.UPDATE_PROFILE_FAILED,
        error,
      };
    },
    // EDITBlogTagSuccessAction: (data) => {
    //   return {
    //     type: Actions.EDIT_BLOG_TAG_SUCCEEDED,
    //     data,
    //   };
    // },
  
    // EDITBlogTagFailedAction: (error) => {
    //   return {
    //     type: Actions.EDIT_BLOG_TAG_FAILED,
    //     error,
    //   };
    // },
  
   
  };
  
  export default Actions;
  