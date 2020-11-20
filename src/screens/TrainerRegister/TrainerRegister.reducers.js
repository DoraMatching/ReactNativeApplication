import Actions from "./TrainerRegister.actions";
import HomeActions from "../Home/Home.actions";

const TrainerRegisterReducer = (data = {success: null, message: null} , action) => {
  switch (action.type) {
    case Actions.POST_TRAINER_REGISTER_SUCCEEDED:
      console.log("POST_TRAINER_REGISTER_SUCCEEDED", action);
      return {success: true, message: action.data};

    

    case Actions.POST_TRAINER_REGISTER_FAILED:
      return {success: false, message: action.error};


    
    default:
      return {success: null, message: null};
  }
};

export {TrainerRegisterReducer};