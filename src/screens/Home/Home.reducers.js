import Actions from "./Home.actions";
import BlogSearchActions from "../BlogSearch/BlogSearch.actions";
import QuestionSearchActions from "../QuestionSearch/QuestionSearch.actions";
import BlogDetailActions from "../BlogDetail/BlogDetail.actions";
import QuestionDetailActions from "../QuestionDetail/QuestionDetail.actions";
import BlogFormActions from "../BlogForm/BlogForm.actions";
import QuestionFormActions from "../QuestionForm/QuestionForm.actions";
import QuestionFormEditActions from "../QuestionFormEdit/QuestionFormEdit.actions";
import BlogFormEditActions from "../BlogFormEdit/BlogFormEdit.actions";
import _ from "lodash";
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
      return _.uniq([...dataItem, ...action.data.items], "id");

    case Actions.GET_DATA_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return dataItem;

    case Actions.REFRESH_DATA_SUCCEEDED:
      console.log("HomeItemReducer: ", action);
      return action.data.items;

    case BlogDetailActions.POST_BLOG_COMMENT_SUCCEEDED:
    case QuestionDetailActions.POST_QUESTION_COMMENT_SUCCEEDED:
      //console.log("Home reducer is called when post comment");
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

    case BlogFormActions.POST_BLOG_SUCCEEDED:
    case QuestionFormActions.POST_QUESTION_SUCCEEDED:
      //console.log("post blog search: ", [...dataItem, action.data]);
      return [action.data, ...dataItem];

    case BlogSearchActions.DELETE_BLOG_SUCCEEDED:
    case QuestionSearchActions.DELETE_QUESTION_SUCCEEDED:
      //console.log("action in Home", action);
      return dataItem.filter((item) => item.id !== action.id);

    case BlogFormEditActions.UPDATE_BLOG_SUCCEEDED:
    case QuestionFormEditActions.UPDATE_QUESTION_SUCCEEDED:
      console.log("action Update in Home", action);
      console.log("ok");
      return dataItem.map((item) =>
        item.id === action.data.id ? action.data : item,
      );
    case QuestionFormEditActions.UPDATE_QUESTION_FAILED:
      console.log("Failed in update question in Home screen", action);
    default:
      return dataItem;
  }
};

const AlertReducer = (alert = null, action) => {
  console.log("alert in Home.reducer: ", action);
  switch (action.type) {
    case BlogSearchActions.DELETE_BLOG_SUCCEEDED:
    case QuestionSearchActions.DELETE_QUESTION_SUCCEEDED:
      return "success";
    //   return action.data;
    case BlogSearchActions.DELETE_BLOG_FAILED:
    case QuestionSearchActions.DELETE_QUESTION_FAILED:
      return action.error;
    default:
      return null;
  }
};
export {HomeReducer, HomeItemReducer, AlertReducer};
