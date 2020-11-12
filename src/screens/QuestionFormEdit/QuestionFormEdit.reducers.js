import Actions from "./QuestionFormEdit.actions";
import HomeActions from "../Home/Home.actions";
const QuestionFormEditReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.UPDATE_QUESTION_SUCCEEDED:
      console.log("update question successfully", action);
      return {success: true, message: action.data};

    

    case Actions.UPDATE_QUESTION_FAILED:
      return {success: false, message: action.error};


    
    default:
      return {success: null, message: null};
  }
};

const QuestionEditReducer = (params = null, action) => {
  switch (action.type) {
    case Actions.EDIT_QUESTION:
      console.log("edit question reducer", action);
      return action.params;
    default:
      return params;
  }
}

export {QuestionFormEditReducer, QuestionEditReducer};