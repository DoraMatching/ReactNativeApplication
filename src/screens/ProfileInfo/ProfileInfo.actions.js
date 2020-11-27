const Actions = {
  GET_PROFILE_INFO: "GET_PROFILE_INFO",

  GET_PROFILE_INFO_SUCCEEDED: "GET_PROFILE_INFO_SUCCEEDED",
  GET_PROFILE_INFO_FAILED: "GET_PROFILE_INFO_FAILED",

  GET_PROFILE_INFO_CLASSROOM : "GET_PROFILE_INFO_CLASSROOM",
  GET_MORE_PROFILE_INFO_CLASSROOM : "GET_MORE_PROFILE_INFO_CLASSROOM",
  GET_PROFILE_INFO_CLASSROOM_SUCCEEDED : "GET_PROFILE_INFO_CLASSROOM_SUCCEEDED",
  GET_PROFILE_INFO_CLASSROOM_FAILED : "GET_PROFILE_INFO_CLASSROOM_FAILED",

  GET_CLASS_DETAIL_MODAL : "GET_CLASS_DETAIL_MODAL",

  REFRESH_PROFILE_INFO_CLASSROOM:"REFRESH_PROFILE_INFO_CLASSROOM",
  REFRESH_PROFILE_INFO_CLASSROOM_SUCCEEDED: "REFRESH_PROFILE_INFO_CLASSROOM_SUCCEEDED",
  REFRESH_PROFILE_INFO_CLASSROOM_FAILED: "REFRESH_PROFILE_INFO_CLASSROOM_FAILED",

  getClassDetailModalAction: (params) => {
    return {
      type : Actions.GET_CLASS_DETAIL_MODAL,
      params,
    }
  },

  getProfileAction: (params) => {
    return {
      type: Actions.GET_PROFILE_INFO,
      params,
    };
  },

  getProfileSuccessAction: (data, id) => {
    return {
      type: Actions.GET_PROFILE_INFO_SUCCEEDED,
      id,
      data,
    };
  },

  getProfileFailedAction: (error) => {
    return {
      type: Actions.GET_PROFILE_INFO_FAILED,
      error,
    };
  },

  getProfileClassroomAction: (params) => {
    return {
      type: Actions.GET_PROFILE_INFO_CLASSROOM,
      params,
    };
  },

  getMoreProfileClassroomAction: (params) => {
    return {
      type: Actions.GET_MORE_PROFILE_INFO_CLASSROOM,
      params,
    };
  },

  getProfileClassroomSuccessAction: (data) => {
    return {
      type: Actions.GET_PROFILE_INFO_CLASSROOM_SUCCEEDED,
      data,
    };
  },

  getProfileClassroomFailedAction: (error) => {
    return {
      type: Actions.GET_PROFILE_INFO_CLASSROOM_FAILED,
      error,
    };
  },

  getRefreshDataAction: (params) => {
    return {
      type: Actions.REFRESH_PROFILE_INFO_CLASSROOM,
      params,
    };
  },
  getRefreshDataSuccessAction: (data) => {
    return {
      type: Actions.REFRESH_PROFILE_INFO_CLASSROOM_SUCCEEDED,
      data,
    };
  },

  getRefreshDataFailedAction: (error) => {
    return {
      type: Actions.REFRESH_PROFILE_INFO_CLASSROOM_FAILED,
      error,
    };
  },
};

export default Actions;
