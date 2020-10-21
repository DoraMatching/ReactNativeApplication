const Actions = {
    GET_BLOG : "GET_BLOG",
    GET_QUESTION: "GET_QUESTION",
    GET_BLOG_QUESTION: "GET_BLOG_QUESTION",
    GET_BLOG_SUCCEEDED: "GET_BLOG_SUCCEEDED",
    GET_BLOG_FAILED: "GET_BLOG_FAILED",
    GET_QUESTION_SUCCEEDED: "GET_QUESTION_SUCCEEDED",
    GET_QUESTION_FAILED: "GET_QUESTION_FAILED",
    GET_BLOG_QUESTION_SUCCEEDED: "GET_BLOG_QUESTION_SUCCEEDED",
    GET_BLOG_QUESTION_FAILED: "GET_BLOG_QUESTION_FAILED",
    _FAILED: "GET_QUESTION_FAILED",
    getBlogsAction : (params) => {
      // console.log("in getBlogsAction");
        return {
          type: Actions.GET_BLOG,
          params,
        };
      },
    
    getQuestionsAction : (params) => {
      // console.log("in getBlogsAction");
        return {
          type: Actions.GET_QUESTION,
          params,
        };
      },
      
    getBlogsSucessAction : (data) => {
    return {
        type: Actions.GET_BLOG_SUCCEEDED,
        data,
    };
    },
    
    getBlogsFailedAction : (error) => {
      return {
        type: Actions.GET_BLOG_FAILED,
        error,
      };
    },

    getQuestionsSucessAction : (data) => {
    return {
        type: Actions.GET_QUESTION_SUCCEEDED,
        data,
      };
    },
      
    getQuestionsFailedAction : (error) => {
      return {
        type: Actions.GET_QUESTION_FAILED,
        error,
      };
    },

    getBlogsQuestionsAction : (params) => {
      return {
        type : Actions.GET_BLOG_QUESTION,
        params,
      }
    },

    getBlogsQuestionsSuccessAction : (data) => {
      return {
        type : Actions.GET_BLOG_QUESTION_SUCCEEDED,
        data,
      }
    },

    getBlogsQuestionsFailedAction : (error) => {
      return {
        type : Actions.GET_BLOG_QUESTION_FAILED,
        error,
      }
    },
};

export default Actions;