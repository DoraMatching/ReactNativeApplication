import Actions from "./Home.actions";

const HomeReducer = (data = null , action) => {
  switch (action.type) {
    case Actions.GET_DATA_SUCCEEDED:
      return action.data;

    case Actions.GET_DATA_FAILED:
      return data;

    default:
      return data;
  }
};

const HomeItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_DATA_SUCCEEDED:
      return [...dataItem, ...action.data.items];

    case Actions.GET_DATA_FAILED:
      return dataItem;

    default:
      return dataItem;
  }
};
export {HomeReducer, HomeItemReducer};
