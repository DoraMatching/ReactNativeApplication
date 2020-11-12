const Actions = {
  UPDATE_QUESTION: "UPDATE_QUESTION",
  EDIT_QUESTION: "EDIT_QUESTION",
  UPDATE_QUESTION_SUCCEEDED: "UPDATE_QUESTION_SUCCEEDED",
  UPDATE_QUESTION_FAILED: "UPDATE_QUESTION_FAILED",

  updateQuestionAction: (params) => {
    return {
      type: Actions.UPDATE_QUESTION,
      params,
    };
  },

  editQuestionAction: (params) => {
    return {
      type: Actions.EDIT_QUESTION,
      params,
    }
  },

  updateQuestionSuccessAction: (data) => {
    return {
      type: Actions.UPDATE_QUESTION_SUCCEEDED,
      data,
    };
  },

  updateQuestionFailedAction: (error) => {
    return {
      type: Actions.UPDATE_QUESTION_FAILED,
      error,
    };
  },
};

export default Actions;
