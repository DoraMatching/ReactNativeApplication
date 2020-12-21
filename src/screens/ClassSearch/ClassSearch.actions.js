const Actions = {
    GET_CLASS_SEARCH: "GET_CLASS_SEARCH",
    REFRESH_CLASS_SEARCH:"REFRESH_CLASS_SEARCH",
    GET_CLASS_SEARCH_SUCCEEDED: "GET_CLASS_SEARCH_SUCCEEDED",
    GET_CLASS_SEARCH_FAILED: "GET_CLASS_SEARCH_FAILED",
    REFRESH_CLASS_SEARCH_SUCCEEDED: "GET_REFRESH_CLASS_SEARCH_SUCCEEDED",
    REFRESH_CLASS_SEARCH_FAILED: "GET_REFRESH_CLASS_SEARCH_FAILED",
   
    getClassSearchAction: (params) => {
      return {
        type: Actions.GET_CLASS_SEARCH,
        params,
      };
    },
  
  
    getRefreshClassSearchAction: (params) => {
      return {
        type: Actions.REFRESH_CLASS_SEARCH,
        params,
      };
    },
  
    getClassSearchSuccessAction: (data) => {
      return {
        type: Actions.GET_CLASS_SEARCH_SUCCEEDED,
        data,
      };
    },
  
    getClassSearchFailedAction: (error) => {
      return {
        type: Actions.GET_CLASS_SEARCH_FAILED,
        error,
      };
    },
  
    getRefreshClassSearchSuccessAction: (data) => {
      return {
        type: Actions.REFRESH_CLASS_SEARCH_SUCCEEDED,
        data,
      };
    },
  
    getRefreshClassSearchFailedAction: (error) => {
      return {
        type: Actions.REFRESH_CLASS_SEARCH_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  