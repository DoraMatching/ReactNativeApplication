const Actions = {
  ADD_LESSON: "ADD_LESSON",
  EDIT_LESSON: "EDIT_LESSON",
  DELETE_LESSON: "DELETE_LESSON",

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

  deleteLessonAction: (item) => {
    return {
      type: Actions.DELETE_LESSON,
      item,
    };
  },
};

export default Actions;
