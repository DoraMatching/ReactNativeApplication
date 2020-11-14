import {connect} from "react-redux";
import QuestionDetail from "./QuestionDetail.screens";
import actions from "./QuestionDetail.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    question : state.QuestionDetailReducer,
    comments : state.QuestionCommentReducer,
    token : state.LoginReducer?.message.token,
    userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateQuestionComment: (params) => {
      dispatch(actions.postQuestionCommentAction(params));
    },
    onEditQuestionComment : (params) => {
      dispatch(actions.patchQuestionCommentAction(params));
    }
  };
};

const QuestionDetailContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);

export default QuestionDetailContainer;
