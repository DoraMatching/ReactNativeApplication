import Actions from "./QuestionSearch.actions";
import QuestionFormActions from "../QuestionForm/QuestionForm.actions";
import QuestionFormEditActions from "../QuestionFormEdit/QuestionFormEdit.actions";
import _ from "lodash";
const QuestionTagReducer = (data = null , action) => {
  switch (action.type) {
    case Actions.GET_QUESTION_TAG_SUCCEEDED:
      return action.data;

    case Actions.GET_QUESTION_TAG_FAILED:
      return data;

    default:
      return data;
  }
};

const QuestionTopReducer = (data = null , action) => {
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
      return _.uniq([...dataItem, ...action.data.items], "id");

    case Actions.DELETE_QUESTION_SUCCEEDED:
      return dataItem.filter((item) => item.id !== action.id);

      case Actions.REFRESH_DATA_SUCCEEDED:
        return action.data.items;

    case QuestionFormActions.POST_QUESTION_SUCCEEDED:
      console.log("post question search: ",[ ...dataItem, action.data]);
      return [ action.data ,...dataItem,];

    case Actions.GET_QUESTION_TOP_FAILED:
    case Actions.DELETE_QUESTION_FAILED:
    case Actions.REFRESH_DATA_FAILED:
      return dataItem;

    case QuestionFormEditActions.UPDATE_QUESTION_SUCCEEDED:
      console.log("action Update in QuestionSearch", action);
      return dataItem.map((item) =>
      item.id === action.data.id
        ? action.data
        : item,
    );

    default:
      return dataItem;
  }
};

export {QuestionTopItemReducer, QuestionTopReducer};