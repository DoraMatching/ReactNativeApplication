import {connect} from "react-redux";
import {BlogEditForm} from "./BlogFormEdit.screens";
import actions from "./BlogFormEdit.actions";
import BlogDetailActions from "../BlogDetail/BlogDetail.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    //data : state.BlogFormReducer,
    //params : state.EditReducer,
    params : state.BlogDetailReducer,
    token : state.UserLoginReducer? state.UserLoginReducer.token : "",
    //token : state.LoginReducer? state.LoginReducer.message.token : "",
    //userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
    data : state.BlogFormEditReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onEditBlog: (params) => {
      dispatch(actions.updateBlogAction(params));
    },
    onFetchBlogDetail : (params) => {
      dispatch(BlogDetailActions.getBlogDetailAction(params));
    }
  };
};

const BlogFormEditContainer = connect(mapStateToProps, mapDispatchToProps)(BlogEditForm);

export default BlogFormEditContainer;
