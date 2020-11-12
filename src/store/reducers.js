import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {HomeReducer, HomeItemReducer, AlertReducer} from "../screens/Home/Home.reducers";
import LoginReducer from "../screens/Login/Login.reducers";
import RegisterReducer from "../screens/Register/Register.reducers";
import {BlogTopReducer, BlogTopItemReducer} from '../screens/BlogSearch/BlogSearch.reducers'
import {QuestionTopItemReducer, QuestionTopReducer} from '../screens/QuestionSearch/QuestionSearch.reducers'
import {BlogDetailReducer} from '../screens/BlogDetail/BlogDetail.reducers';
import {QuestionDetailReducer} from '../screens/QuestionDetail/QuestionDetail.reducers';
import {BlogFormReducer} from '../screens/BlogForm/BlogForm.reducers';
import {QuestionFormReducer} from '../screens/QuestionForm/QuestionForm.reducers';
import {BlogFormEditReducer, EditReducer} from '../screens/BlogFormEdit/BlogFormEdit.reducers';
import {QuestionFormEditReducer, QuestionEditReducer} from '../screens/QuestionFormEdit/QuestionFormEdit.reducers';
import {ProfileReducer} from '../screens/Profile/Profile.reducers';


const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  HomeReducer,
  HomeItemReducer,
  BlogTopItemReducer,
  BlogTopReducer,
  QuestionTopItemReducer,
  QuestionTopReducer,
  BlogDetailReducer,
  QuestionDetailReducer,
  BlogFormReducer,
  AlertReducer,
  ProfileReducer,
  QuestionFormReducer,
  BlogFormEditReducer,
  EditReducer,
  QuestionFormEditReducer,
  QuestionEditReducer,
  form: formReducer,
});

export default rootReducer;
