import Actions from "./QuestionDetail.actions";
import HomeActions from "../Home/Home.actions";
const QuestionDetailReducer = (question = null, action) => {
  switch (action.type) {
    case Actions.POST_QUESTION_COMMENT_SUCCEEDED:
      return action.data;

    case Actions.GET_QUESTION_DETAIL_SUCCEEDED:
      return action.data;

    case HomeActions.OPEN_QUESTION_DETAIL:
      return action.data;

    case Actions.PATCH_QUESTION_COMMENT_FAILED:
    case Actions.POST_QUESTION_COMMENT_FAILED:
      return question;

    case Actions.PATCH_QUESTION_COMMENT_SUCCEEDED:
      question.comments = question.comments.map((item) =>
        item.id === action.data.id ? action.data : item,
      );
      //const newQuestion = question;
      return question;
    default:
      return question;
  }
};

const QuestionCommentReducer = (comments = [], action) => {
  switch (action.type) {
    case Actions.POST_QUESTION_COMMENT_SUCCEEDED:
      //console.log("comment successfully", action);
      return action.data.comments;

    case HomeActions.OPEN_QUESTION_DETAIL:
      return action.data.comments;

    case Actions.PATCH_QUESTION_COMMENT_FAILED:
    case Actions.POST_QUESTION_COMMENT_FAILED:
      return comments;

    case Actions.PATCH_QUESTION_COMMENT_SUCCEEDED:
      return comments.map((item) =>
        item.id === action.data.id ? action.data : item,
      );
    default:
      return comments;
  }
};

export {QuestionDetailReducer, QuestionCommentReducer};
