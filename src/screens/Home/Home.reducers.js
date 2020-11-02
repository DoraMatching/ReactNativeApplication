import Actions from "./Home.actions";
import BlogDetailActions from '../BlogDetail/BlogDetail.actions';

const HomeReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_DATA_SUCCEEDED:
    case Actions.REFRESH_DATA_SUCCEEDED:
      return action.data;

    case Actions.GET_DATA_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return data;

    default:
      return data;
  }
};

const HomeItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_DATA_SUCCEEDED:
      return [...dataItem, ...action.data.items];

    case Actions.GET_DATA_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return dataItem;

    case Actions.REFRESH_DATA_SUCCEEDED:
      return action.data.items;

    case BlogDetailActions.POST_BLOG_COMMENT_SUCCEEDED:
      console.log("Home reducer is called when post comment");
      return dataItem.map(item => (item.id === action.data.id)
      ? {...item, comments : action.data.comments}
      : item)

    default:
      return dataItem;
  }
};
export {HomeReducer, HomeItemReducer};
