const Actions = {
    //GET_BLOG_TAG: "GET_BLOG_TAG",
    GET_SEARCH: "GET_SEARCH",
   
    GET_SEARCH_SUCCEEDED: "GET_SEARCH_SUCCEEDED",
    GET_SEARCH_FAILED: "GET_SEARCH_FAILED",
  
    GET_NO_RESULT: "GET_NO_RESULT",
 
    getSearchAction: (params) => {
      return {
        type: Actions.GET_SEARCH,
        params,
      };
    },
  
    getNoResultAction : () => {
      return {
        type: Actions.GET_NO_RESULT,
      }
    },
  
    getSearchSuccessAction: (data) => {
      return {
        type: Actions.GET_SEARCH_SUCCEEDED,
        data,
      };
    },
  
    getSearchFailedAction: (error) => {
      return {
        type: Actions.GET_SEARCH_FAILED,
        error,
      };
    },
  
   
  };
  
  export default Actions;
  