const Actions = {
  GET_PERSONAL_SCHEDULE: "GET_PERSONAL_SCHEDULE",
  GET_PERSONAL_SCHEDULE_SUCCEEDED: "GET_PERSONAL_SCHEDULE_SUCCEEDED",
  GET_PERSONAL_SCHEDULE_FAILED: "GET_PERSONAL_SCHEDULE_FAILED",

  getPersonalScheduleAction: (params) => {
    return {
      type: Actions.GET_PERSONAL_SCHEDULE,
      params,
    };
  },

  getPersonalScheduleSuccessAction: (data) => {
    return {
      type: Actions.GET_PERSONAL_SCHEDULE_SUCCEEDED,
      data,
    };
  },

  getPersonalScheduleFailedAction: (error) => {
    return {
      type: Actions.GET_PERSONAL_SCHEDULE_FAILED,
      error,
    };
  },
};

export default Actions;
