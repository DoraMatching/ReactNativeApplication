const Actions = {
  GET_QUESTION_TAG: "GET_QUESTION_TAG",
  GET_QUESTION_TOP: "GET_QUESTION_TOP",
  GET_QUESTION_TAG_SUCCEEDED: "GET_QUESTION_TAG_SUCCEEDED",
  GET_QUESTION_TAG_FAILED: "GET_QUESTION_TAG_FAILED",
  GET_QUESTION_TOP_SUCCEEDED: "GET_QUESTION_TOP_SUCCEEDED",
  GET_QUESTION_TOP_FAILED: "GET_QUESTION_TOP_FAILED",

  DELETE_QUESTION: "DELETE_QUESTION",
  DELETE_QUESTION_SUCCEEDED: "DELETE_QUESTION_SUCCEEDED",
  DELETE_QUESTION_FAILED: "DELETE_QUESTION_FAILED",

  REFRESH_DATA:"REFRESH_DATA",
  REFRESH_DATA_SUCCEEDED: "GET_REFRESH_DATA_SUCCEEDED",
  REFRESH_DATA_FAILED: "GET_REFRESH_DATA_FAILED",

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
  getRefreshDataAction: (params) => {
    return {
      type: Actions.REFRESH_DATA,
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

  deleteQuestionAction: (params) => {
    return {
      type: Actions.DELETE_QUESTION,
      params,
    };
  },

  deleteQuestionSuccessAction: (data, id) => {
    return {
      type: Actions.DELETE_QUESTION_SUCCEEDED,
      id,
      data,
    };
  },

  deleteQuestionFailedAction: (error) => {
    return {
      type: Actions.DELETE_QUESTION_FAILED,
      error,
    };
  },

  getRefreshDataSuccessAction: (data) => {
    return {
      type: Actions.REFRESH_DATA_SUCCEEDED,
      data,
    };
  },

  getRefreshDataFailedAction: (error) => {
    return {
      type: Actions.REFRESH_DATA_FAILED,
      error,
    };
  },
};

export default Actions;
