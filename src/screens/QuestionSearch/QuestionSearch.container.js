import {connect} from "react-redux";
import QuestionSearch from "./QuestionSearch.screens";
import actions from "./QuestionSearch.actions";
import HomeActions from "../Home/Home.actions";


const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    tags : state.QuestionTagReducer,
    tops : state.QuestionTopReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // onFetchTag: (params) => {
    //   dispatch(actions.getQuestionTagAction(params));
    // },
    onFetchTop: (params) => {
      dispatch(actions.getQuestionTopAction(params));
    },
    onOpenQuestionDetail : (data) => {
      dispatch(HomeActions.openQuestionDetailAction(data));
    }
  };
};

const QuestionSearchContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionSearch);

export default QuestionSearchContainer;
