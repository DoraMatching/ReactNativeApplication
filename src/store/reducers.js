import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {HomeReducer, HomeItemReducer} from "../screens/Home/Home.reducers";
import LoginReducer from "../screens/Login/Login.reducers";
import RegisterReducer from "../screens/Register/Register.reducers";
import {BlogTagReducer, BlogTopReducer} from '../screens/BlogSearch/BlogSearch.reducers'
import {QuestionTagReducer, QuestionTopReducer} from '../screens/QuestionSearch/QuestionSearch.reducers'
import {BlogDetailReducer} from '../screens/BlogDetail/BlogDetail.reducers';

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  HomeReducer,
  HomeItemReducer,
  BlogTagReducer,
  BlogTopReducer,
  QuestionTagReducer,
  QuestionTopReducer,
  BlogDetailReducer,
  form: formReducer,
});

export default rootReducer;
