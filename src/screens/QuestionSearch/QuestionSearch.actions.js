const Actions = {
    GET_QUESTION_TAG: "GET_QUESTION_TAG",
    GET_QUESTION_TOP: "GET_QUESTION_TOP",
    GET_QUESTION_TAG_SUCCEEDED: "GET_QUESTION_TAG_SUCCEEDED",
    GET_QUESTION_TAG_FAILED: "GET_QUESTION_TAG_FAILED",
    GET_QUESTION_TOP_SUCCEEDED: "GET_QUESTION_TOP_SUCCEEDED",
    GET_QUESTION_TOP_FAILED: "GET_QUESTION_TOP_FAILED",

    getQuestionTagAction: (params) => {
      return {
        type: Actions.GET_QUESTION_TAG,
        params,
      };
    },
    getQuestionTopAction: (params) => {
      return {
        type: Actions.GET_QUESTION_TOP,
        params,
      };
    },
  
    getQuestionTagSuccessAction: (data) => {
      return {
        type: Actions.GET_QUESTION_TAG_SUCCEEDED,
        data,
      };
    },
  
    getQuestionTagFailedAction: (error) => {
      return {
        type: Actions.GET_QUESTION_TAG_FAILED,
        error,
      };
    },

    getQuestionTopSuccessAction: (data) => {
      return {
        type: Actions.GET_QUESTION_TOP_SUCCEEDED,
        data,
      };
    },
  
    getQuestionTopFailedAction: (error) => {
      return {
        type: Actions.GET_QUESTION_TOP_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  