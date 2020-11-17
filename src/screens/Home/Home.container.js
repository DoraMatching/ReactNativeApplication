import {connect} from "react-redux";
import Home from "./Home.screens";
import actions from "./Home.actions";
import BlogSearchActions from "../BlogSearch/BlogSearch.actions";

const mapStateToProps = (state) => {
  return {
    data: state.HomeReducer ,
    dataItem : !state.HomeItemReducer ? [] : state.HomeItemReducer,
    userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
    alert : state.AlertReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (params) => {
      dispatch(actions.getDataAction(params));
    },
    onRefreshData : (params) => {
      dispatch(actions.getRefreshDataAction(params));
    },
    onOpenBlogDetail : (data) => {
      dispatch(actions.openBlogDetailAction(data));
    },
    onOpenQuestionDetail : (data) => {
      dispatch(actions.openQuestionDetailAction(data));
    },
    
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
