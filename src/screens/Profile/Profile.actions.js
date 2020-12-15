const Actions = {
    //GET_BLOG_TAG: "GET_BLOG_TAG",
    GET_PROFILE: "GET_PROFILE",
    //DELETE_BLOG: "DELETE_BLOG",
    // GET_BLOG_TAG_SUCCEEDED: "GET_BLOG_TAG_SUCCEEDED",
    // GET_BLOG_TAG_FAILED: "GET_BLOG_TAG_FAILED",
    GET_PROFILE_SUCCEEDED: "GET_PROFILE_SUCCEEDED",
    GET_PROFILE_FAILED: "GET_PROFILE_FAILED",
    GET_OPTION_MODAL : "GET_OPTION_MODAL",

    GET_PROFILE_CLASSES : "GET_PROFILE_CLASSES",
    GET_PROFILE_CLASSES_SUCCEEDED: "GET_PROFILE_CLASSES_SUCCEEDED",
    GET_PROFILE_CLASSES_FAILED: "GET_PROFILE_CLASSES_FAILED",
    
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
   
    getProfileClassesAction : (params) => {
      return {
        type : Actions.GET_PROFILE_CLASSES,
        params,
      }
    },
    getProfileClassesSuccessAction : (data) => {
      return {
        type : Actions.GET_PROFILE_CLASSES_SUCCEEDED,
        data,
      }
    },
    getProfileClassesFailedAction: (error) => {
      return {
        type: Actions.GET_PROFILE_CLASSES_FAILED,
        error,
      };
    },
   
  };
  
  export default Actions;
  