import Actions from "./ClassSearch.actions";

import _ from "lodash";


const ClassSearchReducer = (data = null, action) => {
  console.log("l7", action);
  
  switch (action.type) {
    case Actions.GET_CLASS_SEARCH_SUCCEEDED:
    case Actions.REFRESH_CLASS_SEARCH_SUCCEEDED:
      return action.data;

    case Actions.GET_CLASS_SEARCH_FAILED:
      return data;

    default:
      return data;
  }
};

const ClassSearchItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_CLASS_SEARCH_SUCCEEDED:
      //console.log("in ClassSearchItem");
      
      return _.uniqBy([...dataItem, ...action.data.items], "id");


    case Actions.REFRESH_CLASS_SEARCH_SUCCEEDED:
      return action.data.items;

   

    default:
      return dataItem;
  }
};

export {ClassSearchItemReducer, ClassSearchReducer};
