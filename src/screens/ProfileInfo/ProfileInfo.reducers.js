import Actions from "./ProfileInfo.actions";
import _ from "lodash";
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

const ProfileInfoClassroomItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_INFO_CLASSROOM_SUCCEEDED:
      console.log("ProfileInfoClassroomItem: ",action);
      return _.uniqBy([...dataItem, ...action.data.items], "id");
      case Actions.REFRESH_PROFILE_INFO_CLASSROOM_SUCCEEDED:
        return action.data.items;

    case Actions.GET_PROFILE_INFO_CLASSROOM_FAILED:
      return dataItem;

    default:
      return dataItem;
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

const ClassDetailModal = (showClassDetailModal = null, action) => {
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
  ProfileInfoClassroomItemReducer,
  UserBlogReducer,
  UserQuestionReducer,
  ClassDetailModal,
};
