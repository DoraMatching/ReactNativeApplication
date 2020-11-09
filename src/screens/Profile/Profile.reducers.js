import Actions from "./Profile.actions";

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

const ProfileReducer = (data = null , action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_SUCCEEDED:
      console.log("get user success", action.data);
      return action.data;

    case Actions.GET_PROFILE_FAILED:
      return data;

    default:
      return data;
  }
};

export {ProfileReducer};