import Actions from "./QuestionSearch.actions";

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

export {QuestionTagReducer, QuestionTopReducer};