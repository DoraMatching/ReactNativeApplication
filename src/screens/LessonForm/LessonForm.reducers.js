import Actions from "./LessonForm.actions";

const LessonReducer = (data = [] , action) => {
  switch (action.type) {
    case Actions.ADD_LESSON:
      //console.log("comment successfully", action);
      return [ ...data, action.item];

    

    case Actions.EDIT_LESSON:
      return data.map((item) => item.id === action.item.id ? action.item : item);


    
    case Actions.DELETE_LESSON:
        return data.filter((item) => item.id !== action.item.id);

    default:
        return data;
  }
};

export {LessonReducer};