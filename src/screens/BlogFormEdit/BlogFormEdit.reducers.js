import Actions from "./BlogFormEdit.actions";
import HomeActions from "../Home/Home.actions";
const BlogFormEditReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.UPDATE_BLOG_SUCCEEDED:
      console.log("update successfully", action);
      return {success: true, message: action.data};

    

    case Actions.UPDATE_BLOG_FAILED:
      return {success: false, message: action.error};


    
    default:
      return {success: null, message: null};
  }
};

const EditReducer = (params = null, action) => {
  switch (action.type) {
    case Actions.EDIT_BLOG:
      console.log("edit blog", action);
      return action.params;
    default:
      return null;
  }
}

export {BlogFormEditReducer, EditReducer};