import Actions from "./Search.actions";



const SearchReducer = (data = [], action) => {
  switch (action.type) {
    case Actions.GET_SEARCH_SUCCEEDED:
      return action.data;
    default:
      return [];
  }
};

export {SearchReducer};