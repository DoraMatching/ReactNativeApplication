import Actions from "./ClassForm.actions";
import LessonFormActions from "../LessonForm/LessonForm.actions";

const ClassFormReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.POST_CLASS_SUCCEEDED:
      console.log("post Class successfully", action);
      return {success: true, message: action.data};

    

    case Actions.POST_CLASS_FAILED:
      return {success: false, message: action.error};

    case LessonFormActions.GET_CLASS_ID:
      return data;
    
    default:
      return {success: null, message: null};
  }
};

export {ClassFormReducer};