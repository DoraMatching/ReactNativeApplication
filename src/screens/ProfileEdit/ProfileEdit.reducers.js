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

const ProfileEditReducer = (response = {success: null, messsage: null}, action) => {
  switch (action.type) {
    case Actions.UPDATE_PROFILE_SUCCEEDED:
      console.log("in profileEditReducer");
      return {success: true, messsage: action.data};
    case Actions.UPDATE_PROFILE_FAILED:
      return {success: false, messsage: action.error};
    default:
      return {success: null, messsage: null};
  }
};

export {ProfileEditReducer};
