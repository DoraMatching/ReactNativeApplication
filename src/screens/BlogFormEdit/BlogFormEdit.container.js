import {connect} from "react-redux";
import {BlogEditForm} from "./BlogFormEdit.screens";
import actions from "./BlogFormEdit.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    //data : state.BlogFormReducer,
    edit : state.EditReducer,
    token : state.LoginReducer? state.LoginReducer.message.token : "",
    //userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // onCreateBlog: (params) => {
    //   dispatch(actions.postBlogAction(params));
    // },
    
  };
};

const BlogFormEditContainer = connect(mapStateToProps, mapDispatchToProps)(BlogEditForm);

export default BlogFormEditContainer;
