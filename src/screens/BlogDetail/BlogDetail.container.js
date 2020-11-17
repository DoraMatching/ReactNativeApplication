import {connect} from "react-redux";
import BlogDetail from "./BlogDetail.screens";
import actions from "./BlogDetail.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    blog : state.BlogDetailReducer,
    token : state.UserLoginReducer? state.UserLoginReducer.token : "",
    userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
    comments : state.BlogCommentReducer,
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
