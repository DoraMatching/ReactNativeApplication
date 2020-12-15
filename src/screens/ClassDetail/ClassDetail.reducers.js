import Actions from "./ClassDetail.actions";

const ClassDetailReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_CLASS_DETAIL_SUCCEEDED:
    case Actions.GET_CLASS_REGISTER_SUCCEEDED:
    case Actions.GET_CLASS_DEREGISTER_SUCCEEDED:
      return action.data;

    case Actions.GET_CLASS_DETAIL_FAILED:
      return data;

    default:
      return data;
  }
};

const ClassRegisterReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_CLASS_REGISTER_SUCCEEDED:
      return action.data;

    case Actions.GET_CLASS_REGISTER_FAILED:
      return data;

    default:
      return data;
  }
};

const ClassDeregisterReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_CLASS_DEREGISTER_SUCCEEDED:
      return action.data;

    case Actions.GET_CLASS_DEREGISTER_FAILED:
      return data;

    default:
      return data;
  }
};

export {ClassDetailReducer, ClassRegisterReducer, ClassDeregisterReducer};
