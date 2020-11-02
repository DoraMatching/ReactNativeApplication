import {connect} from "react-redux";
import BlogDetail from "./BlogDetail.screens";
import actions from "./BlogDetail.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    blog : state.BlogDetailReducer,
    token : state.LoginReducer?.message.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateBlogComment: (params) => {
      dispatch(actions.postBlogCommentAction(params));
    },
  };
};

const BlogDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BlogDetail);

export default BlogDetailContainer;
