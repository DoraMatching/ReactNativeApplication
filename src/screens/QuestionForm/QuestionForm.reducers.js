import Actions from "./QuestionForm.actions";
import HomeActions from "../Home/Home.actions";

const QuestionFormReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.POST_QUESTION_SUCCEEDED:
      console.log("post question successfully", action);
      return {success: true, message: action.data};

    

    case Actions.POST_QUESTION_FAILED:
      return {success: false, message: action.error};


    
    default:
      return {success: null, message: null};
  }
};

export {QuestionFormReducer};