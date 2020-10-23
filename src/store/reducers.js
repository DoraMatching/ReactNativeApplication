import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {
  HomeItemReducer,
  // BlogReducer,
  // BlogItemReducer,
  // QuestionReducer,
  // QuestionItemReducer,
  HomeReducer,
} from "../screens/Home/Home.reducers";
import LoginReducer from "../screens/Login/Login.reducers";
import RegisterReducer from "../screens/Register/Register.reducers";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  // BlogReducer,
  // BlogItemReducer,
  // QuestionReducer,
  // QuestionItemReducer,
  HomeReducer,
  HomeItemReducer,
  form: formReducer,
});

export default rootReducer;
