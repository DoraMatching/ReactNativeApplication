
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import LoginReducer from '../screens/Login/Login.reducers';

const rootReducer = combineReducers({
    LoginReducer,
    form: formReducer,
  });

export default rootReducer;