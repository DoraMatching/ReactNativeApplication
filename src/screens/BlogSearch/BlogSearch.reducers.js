import Actions from "./BlogSearch.actions";

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

const BlogTopReducer = (data = null , action) => {
  switch (action.type) {
    case Actions.GET_BLOG_TOP_SUCCEEDED:
      return action.data;

    case Actions.GET_BLOG_TOP_FAILED:
      return data;

    default:
      return data;
  }
};

const BlogTopItemReducer = (dataItem = [] , action) => {
  switch (action.type) {

    case Actions.GET_BLOG_TOP_SUCCEEDED:
      return [dataItem, ...action.data.items];

    case Actions.DELETE_BLOG_SUCCEEDED:
      return dataItem.filter(item => item.id !== action.id);

    case Actions.GET_BLOG_TOP_FAILED:
      case Actions.DELETE_BLOG_FAILED:
      return dataItem;

    default:
      return dataItem;
  }
};

export {BlogTopReducer, BlogTopItemReducer};