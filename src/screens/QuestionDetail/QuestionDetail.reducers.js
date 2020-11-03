import Actions from "./QuestionDetail.actions";
import HomeActions from "../Home/Home.actions";
const QuestionDetailReducer = (question = null , action) => {
  switch (action.type) {
    case Actions.POST_QUESTION_COMMENT_SUCCEEDED:
      console.log("comment successfully", action);
      return action.data;

    case HomeActions.OPEN_QUESTION_DETAIL:
      console.log("open question detail", action);
      return action.data;

    case Actions.PATCH_QUESTION_COMMENT_FAILED:
      console.log("patch question comment failed", action);
    case Actions.POST_QUESTION_COMMENT_FAILED:
    
      return question;

    case Actions.PATCH_QUESTION_COMMENT_SUCCEEDED:
      console.log("patch question comment successfully", action);
      question.comments = question.comments.map(item =>  (item.id === action.data.id)
      ? action.data
      : item);
      console.log("patch comment successfully", question);
      return question;
    default:
      return question;
  }
};

export {QuestionDetailReducer};