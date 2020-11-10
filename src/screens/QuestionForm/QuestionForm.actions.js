const Actions = {
    POST_QUESTION: "POST_QUESTION",
  
    POST_QUESTION_SUCCEEDED: "POST_QUESTION_SUCCEEDED",
    POST_QUESTION_FAILED: "POST_QUESTION_FAILED",
  
    postQuestionAction: (params) => {
      return {
        type: Actions.POST_QUESTION,
        params,
      };
    },
  
    postQuestionSuccessAction: (data) => {
      return {
        type: Actions.POST_QUESTION_SUCCEEDED,
        data,
      };
    },
  
    postQuestionFailedAction: (error) => {
      return {
        type: Actions.POST_QUESTION_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  