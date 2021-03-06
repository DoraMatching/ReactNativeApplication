import Actions from "./BlogDetail.actions";
import HomeActions from "../Home/Home.actions";
const BlogDetailReducer = (blog = null , action) => {
  switch (action.type) {
    case Actions.POST_BLOG_COMMENT_SUCCEEDED:
      //console.log("comment successfully", action);
      return action.data;

    case HomeActions.OPEN_BLOG_DETAIL:
      //console.log("open blog detail", action);
      return action.data;

    case Actions.GET_BLOG_DETAIL_SUCCEEDED:
      return action.data;

    case Actions.POST_BLOG_COMMENT_FAILED:
    case Actions.PATCH_BLOG_COMMENT_FAILED:
      return blog;

    case Actions.PATCH_BLOG_COMMENT_SUCCEEDED:
      //console.log("patch comment successfully", action);
      blog.comments = blog.comments.map(item =>  (item.id === action.data.id)
      ? action.data
      : item);
      //console.log("patch comment successfully", blog);
      return blog;
    default:
      return blog;
  }
};

const BlogCommentReducer = (comments = [], action) => {
  switch (action.type) {
    case Actions.POST_BLOG_COMMENT_SUCCEEDED:
      //console.log("comment successfully", action);
      return action.data.comments;

    case HomeActions.OPEN_BLOG_DETAIL:
      //console.log("open BLOG detail", action);
      return action.data.comments;

    case Actions.PATCH_BLOG_COMMENT_FAILED:
      //console.log("patch BLOG comment failed", action);
    case Actions.POST_BLOG_COMMENT_FAILED:
    
      return comments;

    case Actions.PATCH_BLOG_COMMENT_SUCCEEDED:
      
      return comments.map(item =>  (item.id === action.data.id)
      ? action.data
      : item);
    default:
      return comments;
  }
} 

export {BlogDetailReducer, BlogCommentReducer};