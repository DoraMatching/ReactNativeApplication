import {connect} from "react-redux";
import {BlogForm} from "./BlogForm.screens";
import actions from "./BlogForm.actions";
import tagPredictionActions from "../TagPrediction/TagPrediction.actions";

const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    data : state.BlogFormReducer,
    token : state.UserLoginReducer? state.UserLoginReducer.token : "",
    predictedTags: state.TagPredictionReducer,
    //userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateBlog: (params) => {
      dispatch(actions.postBlogAction(params));
    },
    onPredictTags: (params) => {
      dispatch(tagPredictionActions.postTagPredictionAction(params));
    },
  };
};

const BlogFormContainer = connect(mapStateToProps, mapDispatchToProps)(BlogForm);

export default BlogFormContainer;
