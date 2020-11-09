import Actions from "./Home.actions";
import BlogSearchActions from "../BlogSearch/BlogSearch.actions";
import QuestionSearchActions from "../QuestionSearch/QuestionSearch.actions";
import BlogDetailActions from "../BlogDetail/BlogDetail.actions";
import QuestionDetailActions from "../QuestionDetail/QuestionDetail.actions";
import {act} from "react-test-renderer";

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
    case QuestionDetailActions.POST_QUESTION_COMMENT_SUCCEEDED:
      console.log("Home reducer is called when post comment");
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
    case QuestionDetailActions.PATCH_QUESTION_COMMENT_SUCCEEDED:
      return dataItem.map((item) =>
        item.id === action.questionID
          ? {
              ...item,
              comments: item.comments.map((item) =>
                item.id === action.data.id ? action.data : item,
              ),
            }
          : item,
      );

    case BlogSearchActions.DELETE_BLOG_SUCCEEDED:
    case QuestionSearchActions.DELETE_QUESTION_SUCCEEDED:
      console.log("action in Home", action);
      return dataItem.filter((item) => item.id !== action.id);

    default:
      return dataItem;
  }
};

const AlertReducer = (alert = null, action) => {
  console.log("alert: ", action);
  switch (action.type) {
    case BlogSearchActions.DELETE_BLOG_SUCCEEDED:
    case QuestionSearchActions.DELETE_QUESTION_SUCCEEDED:
      return action.data;
    case BlogSearchActions.DELETE_BLOG_FAILED:
    case QuestionSearchActions.DELETE_QUESTION_FAILED:
      return action.error;
    default:
      return null;
  }
};
export {HomeReducer, HomeItemReducer, AlertReducer};
