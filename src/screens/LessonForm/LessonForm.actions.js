const Actions = {
  ADD_LESSON: "ADD_LESSON",
  EDIT_LESSON: "EDIT_LESSON",
  //DELETE_LESSON: "DELETE_LESSON",

  POST_LESSON: "POST_LESSON",
  POST_LESSON_SUCCEEDED: "POST_LESSON_SUCCEEDED",
  POST_LESSON_FAILED: "POST_LESSON_FAILED",

  PATCH_LESSON: "PATCH_LESSON",
  PATCH_LESSON_SUCCEEDED: "PATCH_LESSON_SUCCEEDED",
  PATCH_LESSON_FAILED: "PATCH_LESSON_FAILED",

  DELETE_LESSON: "DELETE_LESSON",
  DELETE_LESSON_SUCCEEDED: "DELETE_LESSON_SUCCEEDED",
  DELETE_LESSON_FAILED: "DELETE_LESSON_FAILED",

  GET_LESSON: "GET_LESSON",
  GET_LESSON_SUCCEEDED: "GET_LESSON_SUCCEEDED",
  GET_LESSON_FAILED: "GET_LESSON_FAILED",

  DELETE_ERROR_MESSAGE: "DELETE_ERROR_MESSAGE",

  FETCH_LESSON_DETAIL : "FETCH_LESSON_DETAIL",
  FETCH_LESSON_DETAIL_SUCCEEDED : "FETCH_LESSON_DETAIL_SUCCEEDED",
  FETCH_LESSON_DETAIL_FAILED : "FETCH_LESSON_DETAIL_FAILED",

  GET_CLASS_ID: "GET_CLASS_ID",

  getClassID: () => {
    return {
      type : Actions.GET_CLASS_ID,
    }
  },

  deleteErrorMessage: () => {
    return {
      type : Actions.DELETE_ERROR_MESSAGE,
    }
  },

  addLessonAction: (item) => {
    return {
      type: Actions.ADD_LESSON,
      item,
    };
  },

  editLessonAction: (item) => {
    return {
      type: Actions.EDIT_LESSON,
      item,
    };
  },

  deleteLessonAction: (params) => {
    return {
      type: Actions.DELETE_LESSON,
      params,
    };
  },
  deleteLessonSuccessAction: (data, id) => {
    return {
      type: Actions.DELETE_LESSON_SUCCEEDED,
      id,
      data,
    };
  },

  deleteLessonFailedAction: (error) => {
    return {
      type: Actions.DELETE_LESSON_FAILED,
      error,
    };
  },


  postLessonAction: (params) => {
    return {
      type: Actions.POST_LESSON,
      params,
    };
  },
  postLessonSuccessAction: (data) => {
    return {
      type: Actions.POST_LESSON_SUCCEEDED,
      data,
    };
  },

  postLessonFailedAction: (error) => {
    return {
      type: Actions.POST_LESSON_FAILED,
      error,
    };
  },

  patchLessonAction: (params) => {
    return {
      type: Actions.PATCH_LESSON,
      params,
    };
  },
  patchLessonSuccessAction: (data) => {
    return {
      type: Actions.PATCH_LESSON_SUCCEEDED,
      data,
    };
  },

  patchLessonFailedAction: (error) => {
    return {
      type: Actions.PATCH_LESSON_FAILED,
      error,
    };
  },

  getLessonAction: (params) => {
    return {
      type: Actions.GET_LESSON,
      params,
    };
  },
  getLessonSuccessAction: (data) => {
    return {
      type: Actions.GET_LESSON_SUCCEEDED,
      data,
    };
  },

  getLessonFailedAction: (error) => {
    return {
      type: Actions.GET_LESSON_FAILED,
      error,
    };
  },

  getLessonDetailAction: (params) => {
    return {
      type: Actions.FETCH_LESSON_DETAIL,
      params,
    };
  },
  getLessonDetailSuccessAction: (data) => {
    return {
      type: Actions.FETCH_LESSON_DETAIL_SUCCEEDED,
      data,
    };
  },

  getLessonDetailFailedAction: (error) => {
    return {
      type: Actions.FETCH_LESSON_DETAIL_FAILED,
      error,
    };
  },
};

export default Actions;
