import {connect} from "react-redux";
import Home from "./Home.screens";
import actions from "./Home.actions";

const mapStateToProps = (state) => {
  return {
    data: state.HomeReducer,
    dataItem: !state.HomeItemReducer ? [] : state.HomeItemReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBlogsQuestions: (params) => {
      dispatch(actions.getBlogsQuestionsAction(params));
    },
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
