import Actions from "./ProfileEdit.actions";

// const BlogTagReducer = (data = null , action) => {
//   switch (action.type) {
//     case Actions.GET_BLOG_TAG_SUCCEEDED:
//       return action.data;

//     case Actions.GET_BLOG_TAG_FAILED:
//       return data;

//     default:
//       return data;
//   }
// };

const ProfileEditReducer = (data = {success: null, messsage: null}, action) => {
  switch (action.type) {
    case Actions.UPDATE_PROFILE_SUCCEEDED:
      return {sucess: true, messsage: action.data};
    case Actions.UPDATE_PROFILE_FAILED:
      return {sucess: false, messsage: action.data};
    default:
      return {success: null, messsage: null};
  }
};

export {ProfileEditReducer};
