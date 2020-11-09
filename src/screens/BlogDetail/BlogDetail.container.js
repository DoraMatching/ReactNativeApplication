import {connect} from "react-redux";
import BlogDetail from "./BlogDetail.screens";
import actions from "./BlogDetail.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    blog : state.BlogDetailReducer,
    token : state.LoginReducer? state.LoginReducer.message.token : "",
    userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateBlogComment: (params) => {
      dispatch(actions.postBlogCommentAction(params));
    },
    onEditBlogComment : (params) => {
      dispatch(actions.patchBlogCommentAction(params));
    }
  };
};

const BlogDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BlogDetail);

export default BlogDetailContainer;
