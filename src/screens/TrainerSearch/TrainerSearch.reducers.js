import Actions from "./TrainerSearch.actions";
// import TrainerFormActions from "../TrainerForm/TrainerForm.actions";
// import TrainerFormEditActions from "../TrainerFormEdit/TrainerFormEdit.actions";
// import TrainerDetailActions from "../TrainerDetail/TrainerDetail.actions";
import _ from "lodash";


const TrainerTopReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_TRAINER_TOP_SUCCEEDED:
      return action.data;

    case Actions.GET_TRAINER_TOP_FAILED:
      return data;

    default:
      return data;
  }
};

const TrainerTopItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_TRAINER_TOP_SUCCEEDED:
      //console.log("in trainerTopItem");
      
      return _.uniqBy([...dataItem, ...action.data.items], "id");

    case Actions.DELETE_TRAINER_SUCCEEDED:
      return dataItem.filter((item) => item.id !== action.id);

    case Actions.REFRESH_DATA_TRAINER_SUCCEEDED:
      return action.data.items;

    // case TrainerFormActions.POST_TRAINER_SUCCEEDED:
    //   console.log("post Trainer search: ", [...dataItem, action.data]);
    //   return [action.data, ...dataItem];

    // case Actions.GET_TRAINER_TOP_FAILED:
    // case Actions.DELETE_TRAINER_FAILED:
    // case Actions.REFRESH_DATA_FAILED:
    //   return dataItem;

    // case TrainerFormEditActions.UPDATE_TRAINER_SUCCEEDED:
    //   console.log("action Update in TrainerSearch", action);
    //   return dataItem.map((item) =>
    //     item.id === action.data.id ? action.data : item,
    //   );

    // case TrainerDetailActions.POST_TRAINER_COMMENT_SUCCEEDED:
    //   //console.log("Home reducer is called when post comment");
    //   return dataItem.map((item) =>
    //     item.id === action.data.id
    //       ? {...item, comments: action.data.comments}
    //       : item,
    //   );

    // case TrainerDetailActions.PATCH_TRAINER_COMMENT_SUCCEEDED:
    //   return dataItem.map((item) =>
    //     item.id === action.TrainerID
    //       ? {
    //           ...item,
    //           comments: item.comments.map((item) =>
    //             item.id === action.data.id ? action.data : item,
    //           ),
    //         }
    //       : item,
    //   );

    default:
      return dataItem;
  }
};

export {TrainerTopItemReducer, TrainerTopReducer};
