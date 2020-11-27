import Actions from "./QuestionSearch.actions";
import QuestionFormActions from "../QuestionForm/QuestionForm.actions";
import QuestionFormEditActions from "../QuestionFormEdit/QuestionFormEdit.actions";
import QuestionDetailActions from "../QuestionDetail/QuestionDetail.actions";
import _ from "lodash";
const QuestionTagReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_QUESTION_TAG_SUCCEEDED:
      return action.data;

    case Actions.GET_QUESTION_TAG_FAILED:
      return data;

    default:
      return data;
  }
};

const QuestionTopReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_QUESTION_TOP_SUCCEEDED:
      return action.data;

    case Actions.GET_QUESTION_TOP_FAILED:
      return data;

    default:
      return data;
  }
};

const QuestionTopItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_QUESTION_TOP_SUCCEEDED:
      return _.uniqBy([...dataItem, ...action.data.items], "id");

    case Actions.DELETE_QUESTION_SUCCEEDED:
      return dataItem.filter((item) => item.id !== action.id);

    case Actions.REFRESH_DATA_QUESTION_SUCCEEDED:
      return action.data.items;

    case QuestionFormActions.POST_QUESTION_SUCCEEDED:
      console.log("post question search: ", [...dataItem, action.data]);
      return [action.data, ...dataItem];

    case Actions.GET_QUESTION_TOP_FAILED:
    case Actions.DELETE_QUESTION_FAILED:
    case Actions.REFRESH_DATA_QUESTION_FAILED:
      return dataItem;

    case QuestionFormEditActions.UPDATE_QUESTION_SUCCEEDED:
      console.log("action Update in QuestionSearch", action);
      return dataItem.map((item) =>
        item.id === action.data.id ? action.data : item,
      );

    case QuestionDetailActions.POST_QUESTION_COMMENT_SUCCEEDED:
      //console.log("Home reducer is called when post comment");
      return dataItem.map((item) =>
        item.id === action.data.id
          ? {...item, comments: action.data.comments}
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

    default:
      return dataItem;
  }
};

export {QuestionTopItemReducer, QuestionTopReducer};
