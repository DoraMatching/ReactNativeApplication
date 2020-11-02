import Actions from "./BlogDetail.actions";
import HomeActions from "../Home/Home.actions";
const BlogDetailReducer = (data = null , action) => {
  switch (action.type) {
    case Actions.POST_BLOG_COMMENT_SUCCEEDED:
      console.log("comment successfully", action);
      return action.response;

    case HomeActions.OPEN_BLOG_DETAIL:
      console.log("open blog detail", action);
      return action.data;

    case Actions.POST_BLOG_COMMENT_FAILED:
      return data;

    default:
      return data;
  }
};

export {BlogDetailReducer};