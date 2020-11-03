import Actions from "./BlogDetail.actions";
import HomeActions from "../Home/Home.actions";
const BlogDetailReducer = (blog = null , action) => {
  switch (action.type) {
    case Actions.POST_BLOG_COMMENT_SUCCEEDED:
      console.log("comment successfully", action);
      return action.data;

    case HomeActions.OPEN_BLOG_DETAIL:
      console.log("open blog detail", action);
      return action.data;

    case Actions.POST_BLOG_COMMENT_FAILED:
    case Actions.PATCH_BLOG_COMMENT_FAILED:
      return blog;

    case Actions.PATCH_BLOG_COMMENT_SUCCEEDED:
      console.log("patch comment successfully", action);
      blog.comments = blog.comments.map(item =>  (item.id === action.data.id)
      ? action.data
      : item);
      console.log("patch comment successfully", blog);
      return blog;
    default:
      return blog;
  }
};

export {BlogDetailReducer};