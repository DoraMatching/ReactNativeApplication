import {connect} from "react-redux";
import BlogSearch from "./BlogSearch.screens";
import actions from "./BlogSearch.actions";
import HomeActions from "../Home/Home.actions";


const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    //tags : state.BlogTagReducer,
    data: state.BlogTopReducer,
    tops : state.BlogTopItemReducer,
    userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
    token: !state.LoginReducer.message ? "" : state.LoginReducer.message.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // onFetchTag: (params) => {
    //   dispatch(actions.getBlogTagAction(params));
    // },
    onFetchTop: (params) => {
      dispatch(actions.getBlogTopAction(params));
    },
    onRefreshData : (params) => {
      dispatch(actions.getRefreshDataAction(params));
    },
    onOpenBlogDetail : (data) => {
      dispatch(HomeActions.openBlogDetailAction(data));
    }
  };
};

const BlogSearchContainer = connect(mapStateToProps, mapDispatchToProps)(BlogSearch);

export default BlogSearchContainer;
