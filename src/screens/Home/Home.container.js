import {connect} from "react-redux";
import Home from "./Home.screens";
import actions from "./Home.actions";
import BlogSearchActions from "../BlogSearch/BlogSearch.actions";

const mapStateToProps = (state) => {
  return {
    data: state.HomeReducer ,
    dataItem : !state.HomeItemReducer ? [] : state.HomeItemReducer,
    userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
    alert : state.HomeAlertReducer,
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
    onDeleteBlog : (params) => {
      dispatch(BlogSearchActions.deleteBlogAction(params));
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
