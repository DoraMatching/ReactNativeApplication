const Actions = {
    POST_TOPIC: "POST_TOPIC",
  
    POST_TOPIC_SUCCEEDED: "POST_TOPIC_SUCCEEDED",
    POST_TOPIC_FAILED: "POST_TOPIC_FAILED",
  
    postTopicAction: (params) => {
      return {
        type: Actions.POST_TOPIC,
        params,
      };
    },
  
    postTopicSuccessAction: (data) => {
      return {
        type: Actions.POST_TOPIC_SUCCEEDED,
        data,
      };
    },
  
    postTopicFailedAction: (error) => {
      return {
        type: Actions.POST_TOPIC_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  