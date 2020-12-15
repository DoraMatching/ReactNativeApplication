import Actions from "./Schedule.actions";

const PersonalScheduleReducer = (data = [], action) => {
    switch (action.type) {
      case Actions.GET_PERSONAL_SCHEDULE_SUCCEEDED:
        return action.data;
  
      case Actions.GET_PERSONAL_SCHEDULE_FAILED:
        return data;
  
      default:
        return data;
    }
  };

  export {PersonalScheduleReducer};