import {connect} from "react-redux";
import Home from "./Home.screens";
import actions from "./Home.actions";
import BlogSearchActions from "../BlogSearch/BlogSearch.actions";

const mapStateToProps = (state) => {
  return {
    data: state.HomeReducer ,
    dataItem : !state.HomeItemReducer ? [] : state.HomeItemReducer,
    userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
    token: !state.LoginReducer.message ? "" : state.LoginReducer.message.token,
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
