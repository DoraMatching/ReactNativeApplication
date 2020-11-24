import Actions from "./ProfileInfo.actions";

const ProfileInfoReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_INFO_SUCCEEDED:
      return action.data;

    case Actions.GET_PROFILE_INFO_FAILED:
      return data;

    default:
      return data;
  }
};

const ProfileInfoClassroomReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_INFO_CLASSROOM_SUCCEEDED:
      return action.data;

    case Actions.GET_PROFILE_INFO_CLASSROOM_FAILED:
      return data;

    default:
      return data;
  }
};

const UserBlogReducer = (data = [], action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_INFO_SUCCEEDED:
      return action.data.posts;

    default:
      return data;
  }
};

const UserQuestionReducer = (data = [], action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_INFO_SUCCEEDED:
      return action.data.questions;

    default:
      return data;
  }
};

const ClassDetailModal = (showClassDetailModal = () => {}, action) => {
  switch (action.type) {
    case Actions.GET_CLASS_DETAIL_MODAL:
      console.log("get user success", action.params);
      return action.params;

    default:
      return showClassDetailModal;
  }
};

export {
  ProfileInfoReducer,
  ProfileInfoClassroomReducer,
  UserBlogReducer,
  UserQuestionReducer,
  ClassDetailModal,
};
