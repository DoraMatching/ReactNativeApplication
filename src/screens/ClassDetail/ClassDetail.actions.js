const Actions = {
    GET_CLASS_DETAIL: "GET_CLASS_DETAIL",
    GET_CLASS_DETAIL_SUCCEEDED: "GET_CLASS_DETAIL_SUCCEEDED",
    GET_CLASS_DETAIL_FAILED: "GET_CLASS_DETAIL_FAILED",
  
    GET_CLASS_REGISTER : "GET_CLASS_REGISTER",
    GET_CLASS_REGISTER_SUCCEEDED: "GET_CLASS_REGISTER_SUCCEEDED",
    GET_CLASS_REGISTER_FAILED: "GET_CLASS_REGISTER_FAILED",

    GET_CLASS_DEREGISTER : "GET_CLASS_DEREGISTER",
    GET_CLASS_DEREGISTER_SUCCEEDED: "GET_CLASS_DEREGISTER_SUCCEEDED",
    GET_CLASS_DEREGISTER_FAILED: "GET_CLASS_DEREGISTER_FAILED",
    // GET_CLASS_CLASS: "GET_CLASS_CLASS",
  
    // GET_CLASS_CLASS_SUCCEEDED: "GET_CLASS_CLASS_SUCCEEDED",
    // GET_CLASS_CLASS_FAILED: "GET_CLASS_CLASS_FAILED",
  
    getClassDetailAction: (params) => {
      return {
        type: Actions.GET_CLASS_DETAIL,
        params,
      };
    },
  
    getClassDetailSuccessAction: (data, id) => {
      return {
        type: Actions.GET_CLASS_DETAIL_SUCCEEDED,
        id,
        data,
      };
    },
  
    getClassDetailFailedAction: (error) => {
      return {
        type: Actions.GET_CLASS_DETAIL_FAILED,
        error,
      };
    },
  
    getClassRegisterAction: (params) => {
      return {
        type: Actions.GET_CLASS_REGISTER,
        params,
      };
    },
  
    getClassRegisterSuccessAction: (data, id) => {
      return {
        type: Actions.GET_CLASS_REGISTER_SUCCEEDED,
        id,
        data,
      };
    },
  
    getClassRegisterFailedAction: (error) => {
      return {
        type: Actions.GET_CLASS_REGISTER_FAILED,
        error,
      };
    },

    getClassDeregisterAction: (params) => {
      return {
        type: Actions.GET_CLASS_DEREGISTER,
        params,
      };
    },
  
    getClassDeregisterSuccessAction: (data, id) => {
      return {
        type: Actions.GET_CLASS_DEREGISTER_SUCCEEDED,
        id,
        data,
      };
    },
  
    getClassDeregisterFailedAction: (error) => {
      return {
        type: Actions.GET_CLASS_DEREGISTER_FAILED,
        error,
      };
    },
    // getClassClassAction: (params) => {
    //   return {
    //     type: Actions.GET_CLASS_CLASS,
    //     params,
    //   };
    // },
  
    // getClassClassSuccessAction: (data) => {
    //   return {
    //     type: Actions.GET_CLASS_CLASS_SUCCEEDED,
    //     data,
    //   };
    // },
  
    // getClassClassFailedAction: (error) => {
    //   return {
    //     type: Actions.GET_CLASS_CLASS_FAILED,
    //     error,
    //   };
    // },
  };
  
  export default Actions;
  