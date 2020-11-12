import {connect} from "react-redux";
import {QuestionFormEdit} from "./QuestionFormEdit.screens";
import actions from "./QuestionFormEdit.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    //data : state.BlogFormReducer,
    params : state.QuestionEditReducer,
    //token : state.LoginReducer? state.LoginReducer.message.token : "",
    //userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
    result : state.QuestionFormEditReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onEditQuestion: (params) => {
      dispatch(actions.updateQuestionAction(params));
    },
    
  };
};

const QuestionFormEditContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionFormEdit);

export default QuestionFormEditContainer;
