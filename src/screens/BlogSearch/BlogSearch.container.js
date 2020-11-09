import {connect} from "react-redux";
import BlogSearch from "./BlogSearch.screens";
import actions from "./BlogSearch.actions";
import HomeActions from "../Home/Home.actions";


const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    //tags : state.BlogTagReducer,
    tops : state.BlogTopReducer,
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
    onOpenBlogDetail : (data) => {
      dispatch(HomeActions.openBlogDetailAction(data));
    }
  };
};

const BlogSearchContainer = connect(mapStateToProps, mapDispatchToProps)(BlogSearch);

export default BlogSearchContainer;
