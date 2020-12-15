const Actions = {
   
    GET_TRAINER_TOP: "GET_TRAINER_TOP",
   
    GET_TRAINER_TOP_SUCCEEDED: "GET_TRAINER_TOP_SUCCEEDED",
    GET_TRAINER_TOP_FAILED: "GET_TRAINER_TOP_FAILED",
  
    DELETE_TRAINER: "DELETE_TRAINER",
    DELETE_TRAINER_SUCCEEDED: "DELETE_TRAINER_SUCCEEDED",
    DELETE_TRAINER_FAILED: "DELETE_TRAINER_FAILED",
  
    REFRESH_DATA_TRAINER:"REFRESH_DATA_TRAINER",
    REFRESH_DATA_TRAINER_SUCCEEDED: "GET_REFRESH_DATA_TRAINER_SUCCEEDED",
    REFRESH_DATA_TRAINER_FAILED: "GET_REFRESH_DATA_TRAINER_FAILED",
  
   
    getTrainerTopAction: (params) => {
      return {
        type: Actions.GET_TRAINER_TOP,
        params,
      };
    },
    getRefreshDataAction: (params) => {
      return {
        type: Actions.REFRESH_DATA_TRAINER,
        params,
      };
    },
  
 
  
   
  
    getTrainerTopSuccessAction: (data) => {
      return {
        type: Actions.GET_TRAINER_TOP_SUCCEEDED,
        data,
      };
    },
  
    getTrainerTopFailedAction: (error) => {
      return {
        type: Actions.GET_TRAINER_TOP_FAILED,
        error,
      };
    },
  
    deleteTrainerAction: (params) => {
      return {
        type: Actions.DELETE_TRAINER,
        params,
      };
    },
  
    deleteTrainerSuccessAction: (data, id) => {
      return {
        type: Actions.DELETE_TRAINER_SUCCEEDED,
        id,
        data,
      };
    },
  
    deleteTrainerFailedAction: (error) => {
      return {
        type: Actions.DELETE_TRAINER_FAILED,
        error,
      };
    },
  
    getRefreshDataSuccessAction: (data) => {
      return {
        type: Actions.REFRESH_DATA_TRAINER_SUCCEEDED,
        data,
      };
    },
  
    getRefreshDataFailedAction: (error) => {
      return {
        type: Actions.REFRESH_DATA_TRAINER_FAILED,
        error,
      };
    },
  };
  
  export default Actions;
  