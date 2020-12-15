import Actions from "./Search.actions";



const SearchReducer = (data = [], action) => {
  switch (action.type) {
    case Actions.GET_SEARCH_SUCCEEDED:
      return action.data;
    case Actions.GET_NO_RESULT:
      return [];
    default:
      return data;
  }
};

export {SearchReducer};