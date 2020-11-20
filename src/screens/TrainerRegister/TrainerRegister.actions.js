const Actions = {
    POST_TRAINER_REGISTER: "POST_TRAINER_REGISTER",
  
    POST_TRAINER_REGISTER_SUCCEEDED: "POST_TRAINER_REGISTER_SUCCEEDED",
    POST_TRAINER_REGISTER_FAILED: "POST_TRAINER_REGISTER_FAILED",
  
    postTrainerRegisterAction: (params) => {
      return {
        type: Actions.POST_TRAINER_REGISTER,
        params,
      };
    },
  
    postTrainerRegisterSuccessAction: (data) => {
      return {
        type: Actions.POST_TRAINER_REGISTER_SUCCEEDED,
        data,
      };
    },
  
    postTrainerRegisterFailedAction: (error) => {
      return {
        type: Actions.POST_TRAINER_REGISTER_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  