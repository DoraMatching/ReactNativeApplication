import Actions from "./BlogSearch.actions";
import BlogFormActions from "../BlogForm/BlogForm.actions";
import BlogFormEditActions from "../BlogFormEdit/BlogFormEdit.actions";
import BlogDetailActions from "../BlogDetail/BlogDetail.actions";

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
      console.log("post blog search: ", [...dataItem, action.data]);
      return [action.data, ...dataItem];

    case Actions.GET_BLOG_TOP_FAILED:
    case Actions.DELETE_BLOG_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return dataItem;

    case BlogFormEditActions.UPDATE_BLOG_SUCCEEDED:
      console.log("action Update in BlogFormEditActions", action);
      return dataItem.map((item) =>
        item.id === action.data.id ? action.data : item,
      );

    case BlogDetailActions.POST_BLOG_COMMENT_SUCCEEDED:
      return dataItem.map((item) =>
        item.id === action.data.id
          ? {...item, comments: action.data.comments}
          : item,
      );

      case BlogDetailActions.PATCH_BLOG_COMMENT_SUCCEEDED:
        return dataItem.map((item) =>
          item.id === action.blogID
            ? {
                ...item,
                comments: item.comments.map((item) =>
                  item.id === action.data.id ? action.data : item,
                ),
              }
            : item,
        );

    default:
      return dataItem;
  }
};

export {BlogTopReducer, BlogTopItemReducer};
