
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import LoginReducer from '../screens/Login/Login.reducers';
import RegisterReducer from '../screens/Register/Register.reducers';
import {
  // BlogReducer, 
  // BlogItemReducer, 
  // QuestionReducer, 
  // QuestionItemReducer,
  HomeReducer,
  HomeItemReducer, } from '../screens/Home/Home.reducers';


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