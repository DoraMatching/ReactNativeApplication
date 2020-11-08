import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {HomeReducer, HomeItemReducer, AlertReducer} from "../screens/Home/Home.reducers";
import LoginReducer from "../screens/Login/Login.reducers";
import RegisterReducer from "../screens/Register/Register.reducers";
import {BlogTopReducer, BlogTopItemReducer} from '../screens/BlogSearch/BlogSearch.reducers'
import {QuestionTagReducer, QuestionTopReducer} from '../screens/QuestionSearch/QuestionSearch.reducers'
import {BlogDetailReducer} from '../screens/BlogDetail/BlogDetail.reducers';
import {QuestionDetailReducer} from '../screens/QuestionDetail/QuestionDetail.reducers';
import {BlogFormReducer} from '../screens/BlogForm/BlogForm.reducers';


const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  HomeReducer,
  HomeItemReducer,
  BlogTopItemReducer,
  BlogTopReducer,
  QuestionTagReducer,
  QuestionTopReducer,
  BlogDetailReducer,
  QuestionDetailReducer,
  BlogFormReducer,
  AlertReducer,
  form: formReducer,
});

export default rootReducer;
