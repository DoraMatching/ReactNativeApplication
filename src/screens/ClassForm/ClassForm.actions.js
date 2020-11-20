const Actions = {
    POST_CLASS: "POST_CLASS",
  
    POST_CLASS_SUCCEEDED: "POST_CLASS_SUCCEEDED",
    POST_CLASS_FAILED: "POST_CLASS_FAILED",
  
    postClassAction: (params) => {
      return {
        type: Actions.POST_CLASS,
        params,
      };
    },
  
    postClassSuccessAction: (data) => {
      return {
        type: Actions.POST_CLASS_SUCCEEDED,
        data,
      };
    },
  
    postClassFailedAction: (error) => {
      return {
        type: Actions.POST_CLASS_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  