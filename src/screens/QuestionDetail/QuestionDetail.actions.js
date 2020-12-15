const Actions = {
    POST_QUESTION_COMMENT: "POST_QUESTION_COMMENT",
    PATCH_QUESTION_COMMENT: "PATCH_QUESTION_COMMENT",
    POST_QUESTION_COMMENT_SUCCEEDED: "POST_QUESTION_COMMENT_SUCCEEDED",
    POST_QUESTION_COMMENT_FAILED: "POST_QUESTION_COMMENT_FAILED",
    PATCH_QUESTION_COMMENT_SUCCEEDED: "PATCH_QUESTION_COMMENT_SUCCEEDED",
    PATCH_QUESTION_COMMENT_FAILED: "PATCH_QUESTION_COMMENT_FAILED",

    GET_QUESTION_DETAIL : "GET_QUESTION_DETAIL",
    GET_QUESTION_DETAIL_SUCCEEDED : "GET_QUESTION_DETAIL_SUCCEEDED",
    GET_QUESTION_DETAIL_FAILED : "GET_QUESTION_DETAIL_FAILED",

    postQuestionCommentAction: (params) => {
      return {
        type: Actions.POST_QUESTION_COMMENT,
        params,
      };
    },

    patchQuestionCommentAction: (params) => {
      return {
        type: Actions.PATCH_QUESTION_COMMENT,
        params,
      };
    },
    
    postQuestionCommentSuccessAction: (data) => {
      return {
        type: Actions.POST_QUESTION_COMMENT_SUCCEEDED,
        data,
      };
    },
  
    postQuestionCommentFailedAction: (error) => {
      return {
        type: Actions.POST_QUESTION_COMMENT_FAILED,
        error,
      };
    },

    patchQuestionCommentSuccessAction: (data, questionID) => {
      return {
        type: Actions.PATCH_QUESTION_COMMENT_SUCCEEDED,
        questionID,
        data,
      };
    },
  
    patchQuestionCommentFailedAction: (error) => {
      return {
        type: Actions.PATCH_QUESTION_COMMENT_FAILED,
        error,
      };
    },

    getQuestionDetailAction : (params) => {
      return {
        type : Actions.GET_QUESTION_DETAIL,
        params,
      }
    },

    getQuestionDetailSuccessAction : (data) => {
      return {
        type : Actions.GET_QUESTION_DETAIL_SUCCEEDED,
        data,
      }
    },

    getQuestionDetailFailedAction : (error) => {
      return {
        type : Actions.GET_QUESTION_DETAIL_FAILED,
        error,
        
      }
    }

  };
  
  export default Actions;
  