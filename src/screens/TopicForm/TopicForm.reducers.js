import Actions from "./TopicForm.actions";
import HomeActions from "../Home/Home.actions";

const TopicFormReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.POST_TOPIC_SUCCEEDED:
      console.log("post question successfully", action);
      return {success: true, message: action.data};

    

    case Actions.POST_TOPIC_FAILED:
      return {success: false, message: action.error};


    
    default:
      return {success: null, message: null};
  }
};

export {TopicFormReducer};