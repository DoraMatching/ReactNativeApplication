const Actions = {
    POST_TAG_PREDICTION: "POST_TAG_PREDICTION",
  
    POST_TAG_PREDICTION_SUCCEEDED: "POST_TAG_PREDICTION_SUCCEEDED",
    POST_TAG_PREDICTION_FAILED: "POST_TAG_PREDICTION_FAILED",
  
    postTagPredictionAction: (params) => {
      return {
        type: Actions.POST_TAG_PREDICTION,
        params,
      };
    },
  
    postTagPredictionSuccessAction: (data) => {
      return {
        type: Actions.POST_TAG_PREDICTION_SUCCEEDED,
        data,
      };
    },
  
    postTagPredictionFailedAction: (error) => {
      return {
        type: Actions.POST_TAG_PREDICTION_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  