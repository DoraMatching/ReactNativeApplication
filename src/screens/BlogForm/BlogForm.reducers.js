import Actions from "./BlogForm.actions";
import HomeActions from "../Home/Home.actions";
const BlogFormReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.POST_BLOG_SUCCEEDED:
      //console.log("comment successfully", action);
      return {success: true, message: action.data};

    

    case Actions.POST_BLOG_FAILED:
      return {success: false, message: action.error};


    
    default:
      return data;
  }
};

export {BlogFormReducer};