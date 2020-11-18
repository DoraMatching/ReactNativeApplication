import Actions from "./TopicSearch.actions";
import TopicFormActions from "../TopicForm/TopicForm.actions";
//import TopicFormEditActions from "../TopicFormEdit/TopicFormEdit.actions";
//import QuestionDetailActions from "../QuestionDetail/QuestionDetail.actions";
import _ from "lodash";

const TopicTopReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_TOPIC_TOP_SUCCEEDED:
      return action.data;

    case Actions.GET_TOPIC_TOP_FAILED:
      return data;

    default:
      return data;
  }
};

const TopicTopItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_TOPIC_TOP_SUCCEEDED:
      return _.uniq([...dataItem, ...action.data.items], "id");

    case Actions.DELETE_TOPIC_SUCCEEDED:
      return dataItem.filter((item) => item.id !== action.id);

    //case Actions.REFRESH_DATA_SUCCEEDED:
    //  return action.data.items;

    case TopicFormActions.POST_TOPIC_SUCCEEDED:
      console.log("post question search: ", [...dataItem, action.data]);
      return [action.data, ...dataItem];

    case Actions.GET_TOPIC_TOP_FAILED:
    case Actions.DELETE_TOPIC_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return dataItem;

    // case TopicFormEditActions.UPDATE_TOPIC_SUCCEEDED:
    //   console.log("action Update in TopicSearch", action);
    //   return dataItem.map((item) =>
    //     item.id === action.data.id ? action.data : item,
    //   );

    // case QuestionDetailActions.POST_TOPIC_COMMENT_SUCCEEDED:
    //   //console.log("Home reducer is called when post comment");
    //   return dataItem.map((item) =>
    //     item.id === action.data.id
    //       ? {...item, comments: action.data.comments}
    //       : item,
    //   );

    // case QuestionDetailActions.PATCH_TOPIC_COMMENT_SUCCEEDED:
    //   return dataItem.map((item) =>
    //     item.id === action.questionID
    //       ? {
    //           ...item,
    //           comments: item.comments.map((item) =>
    //             item.id === action.data.id ? action.data : item,
    //           ),
    //         }
    //       : item,
    //   );

    default:
      return dataItem;
  }
};

export {TopicTopItemReducer, TopicTopReducer};
