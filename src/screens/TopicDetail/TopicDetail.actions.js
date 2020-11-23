const Actions = {
  GET_TOPIC_DETAIL: "GET_TOPIC_DETAIL",

  GET_TOPIC_DETAIL_SUCCEEDED: "GET_TOPIC_DETAIL_SUCCEEDED",
  GET_TOPIC_DETAIL_FAILED: "GET_TOPIC_DETAIL_FAILED",

  GET_TOPIC_CLASS: "GET_TOPIC_CLASS",

  GET_TOPIC_CLASS_SUCCEEDED: "GET_TOPIC_CLASS_SUCCEEDED",
  GET_TOPIC_CLASS_FAILED: "GET_TOPIC_CLASS_FAILED",

  getTopicDetailAction: (params) => {
    return {
      type: Actions.GET_TOPIC_DETAIL,
      params,
    };
  },

  getTopicDetailSuccessAction: (data, id) => {
    return {
      type: Actions.GET_TOPIC_DETAIL_SUCCEEDED,
      id,
      data,
    };
  },

  getTopicDetailFailedAction: (error) => {
    return {
      type: Actions.GET_TOPIC_DETAIL_FAILED,
      error,
    };
  },

  getTopicClassAction: (params) => {
    return {
      type: Actions.GET_TOPIC_CLASS,
      params,
    };
  },

  getTopicClassSuccessAction: (data) => {
    return {
      type: Actions.GET_TOPIC_CLASS_SUCCEEDED,
      data,
    };
  },

  getTopicClassFailedAction: (error) => {
    return {
      type: Actions.GET_TOPIC_CLASS_FAILED,
      error,
    };
  },
};

export default Actions;
