import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {HomeReducer, HomeItemReducer} from "../screens/Home/Home.reducers";
import LoginReducer from "../screens/Login/Login.reducers";
import RegisterReducer from "../screens/Register/Register.reducers";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  HomeReducer,
  HomeItemReducer,
  form: formReducer,
});

export default rootReducer;
