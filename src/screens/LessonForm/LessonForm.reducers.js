import Actions from "./LessonForm.actions";

const LessonReducer = (data = [], action) => {
  switch (action.type) {
    case Actions.ADD_LESSON:
      //console.log("comment successfully", action);
      return [...data, action.item];
    case Actions.POST_LESSON_SUCCEEDED:
      return [...action.data.lessons];

   // case Actions.EDIT_LESSON:
      case Actions.PATCH_LESSON_SUCCEEDED:
      return data.map((item) =>
        item.id === action.data.id ? action.data : item,
      );

    case Actions.DELETE_LESSON_SUCCEEDED:
      return data.filter((item) => item.id !== action.id);

    default:
      return data;
  }
};

const LessonFormReducer = (data = {success: null, message: null}, action) => {
  switch (action.type) {
    case Actions.POST_LESSON_SUCCEEDED:
    case Actions.PATCH_LESSON_SUCCEEDED:
      console.log("post Class successfully", action);
      return {success: true, message: action.data};

    case Actions.POST_LESSON_FAILED:
    case Actions.PATCH_LESSON_FAILED:
      return {success: false, message: action.error};

    default:
      return {success: null, message: null};
  }
};

export {LessonReducer, LessonFormReducer};
