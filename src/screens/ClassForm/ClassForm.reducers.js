import Actions from "./ClassForm.actions";
import HomeActions from "../Home/Home.actions";

const ClassFormReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.POST_CLASS_SUCCEEDED:
      console.log("post Class successfully", action);
      return {success: true, message: action.data};

    

    case Actions.POST_CLASS_FAILED:
      return {success: false, message: action.error};


    
    default:
      return {success: null, message: null};
  }
};

export {ClassFormReducer};