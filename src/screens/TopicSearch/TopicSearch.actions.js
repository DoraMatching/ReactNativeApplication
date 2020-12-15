const Actions = {
  GET_TOPIC_TOP: "GET_TOPIC_TOP",

  GET_TOPIC_TOP_SUCCEEDED: "GET_TOPIC_TOP_SUCCEEDED",
  GET_TOPIC_TOP_FAILED: "GET_TOPIC_TOP_FAILED",

  DELETE_TOPIC: "DELETE_TOPIC",
  DELETE_TOPIC_SUCCEEDED: "DELETE_TOPIC_SUCCEEDED",
  DELETE_TOPIC_FAILED: "DELETE_TOPIC_FAILED",

  REFRESH_DATA_TOPIC: "REFRESH_DATA_TOPIC",
  REFRESH_DATA_TOPIC_SUCCEEDED: "GET_REFRESH_DATA_TOPIC_SUCCEEDED",
  REFRESH_DATA_TOPIC_FAILED: "GET_REFRESH_DATA_TOPIC_FAILED",

  getTopicTopAction: (params) => {
    return {
      type: Actions.GET_TOPIC_TOP,
      params,
    };
  },
  getRefreshDataAction: (params) => {
    return {
      type: Actions.REFRESH_DATA_TOPIC,
      params,
    };
  },

  getTopicTopSuccessAction: (data) => {
    return {
      type: Actions.GET_TOPIC_TOP_SUCCEEDED,
      data,
    };
  },

  getTopicTopFailedAction: (error) => {
    return {
      type: Actions.GET_TOPIC_TOP_FAILED,
      error,
    };
  },

  deleteTopicAction: (params) => {
    return {
      type: Actions.DELETE_TOPIC,
      params,
    };
  },

  deleteTopicSuccessAction: (data, id) => {
    return {
      type: Actions.DELETE_TOPIC_SUCCEEDED,
      id,
      data,
    };
  },

  deleteTopicFailedAction: (error) => {
    return {
      type: Actions.DELETE_TOPIC_FAILED,
      error,
    };
  },

  getRefreshDataSuccessAction: (data) => {
    return {
      type: Actions.REFRESH_DATA_TOPIC_SUCCEEDED,
      data,
    };
  },

  getRefreshDataFailedAction: (error) => {
    return {
      type: Actions.REFRESH_DATA_TOPIC_FAILED,
      error,
    };
  },
};

export default Actions;
