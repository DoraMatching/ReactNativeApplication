import Actions from "./TagPrediction.actions";
import HomeActions from "../Home/Home.actions";

const TagPredictionReducer = (data = [] , action) => {
  switch (action.type) {
    case Actions.POST_TAG_PREDICTION_SUCCEEDED:
      console.log("post predicted successfully", action);
      return action.data.results.map(item => {return {id: item.toLowerCase(), label: item};});

    

    case Actions.POST_TAG_PREDICTION_FAILED:
        if (action.error[0] == "predict should not be empty") return []; 
        return data;


    
    default:
      return ["default"];
  }
};

export {TagPredictionReducer};