import Actions from "./Search.actions";



const SearchReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_SEARCH_SUCCEEDED:
      return action.data;
    case Actions.GET_NO_RESULT:
      return null;
    default:
      return data;
  }
};

export {SearchReducer};