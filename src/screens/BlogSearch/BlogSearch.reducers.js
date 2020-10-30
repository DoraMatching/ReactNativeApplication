import Actions from "./BlogSearch.actions";

const BlogTagReducer = (data = null , action) => {
  switch (action.type) {
    case Actions.GET_BLOG_TAG_SUCCEEDED:
      return action.data;

    case Actions.GET_BLOG_TAG_FAILED:
      return data;

    default:
      return data;
  }
};

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

export {BlogTagReducer, BlogTopReducer};