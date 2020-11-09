import Actions from "./BlogSearch.actions";
import BlogFormActions from "../BlogForm/BlogForm.actions";
import _ from "lodash";
// const BlogTagReducer = (data = null , action) => {
//   switch (action.type) {
//     case Actions.GET_BLOG_TAG_SUCCEEDED:
//       return action.data;

//     case Actions.GET_BLOG_TAG_FAILED:
//       return data;

//     default:
//       return data;
//   }
// };

const BlogTopReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_BLOG_TOP_SUCCEEDED:
    case Actions.REFRESH_DATA_SUCCEEDED:
      return action.data;

    case Actions.GET_BLOG_TOP_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return data;

    default:
      return data;
  }
};

const BlogTopItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_BLOG_TOP_SUCCEEDED:
      return _.uniq([...dataItem, ...action.data.items], "id");

    case Actions.DELETE_BLOG_SUCCEEDED:
      return dataItem.filter((item) => item.id !== action.id);

      case Actions.REFRESH_DATA_SUCCEEDED:
        return action.data.items;

    case BlogFormActions.POST_BLOG_SUCCEEDED:
      console.log("post blog search: ",[ ...dataItem, action.data]);
      return [ action.data ,...dataItem,];

    case Actions.GET_BLOG_TOP_FAILED:
    case Actions.DELETE_BLOG_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return dataItem;

    default:
      return dataItem;
  }
};

export {BlogTopReducer, BlogTopItemReducer};
