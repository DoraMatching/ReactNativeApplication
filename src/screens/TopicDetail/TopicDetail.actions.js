const Actions = {
  GET_TOPIC_DETAIL: "GET_TOPIC_DETAIL",

  GET_TOPIC_DETAIL_SUCCEEDED: "GET_TOPIC_DETAIL_SUCCEEDED",
  GET_TOPIC_DETAIL_FAILED: "GET_TOPIC_DETAIL_FAILED",

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
};

export default Actions;
