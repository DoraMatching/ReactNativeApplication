import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {HomeReducer, HomeItemReducer, AlertReducer} from "../screens/Home/Home.reducers";
import {LoginReducer, UserLoginReducer} from "../screens/Login/Login.reducers";
import RegisterReducer from "../screens/Register/Register.reducers";
import {BlogTopReducer, BlogTopItemReducer} from '../screens/BlogSearch/BlogSearch.reducers'
import {QuestionTopItemReducer, QuestionTopReducer} from '../screens/QuestionSearch/QuestionSearch.reducers'
import {BlogDetailReducer, BlogCommentReducer} from '../screens/BlogDetail/BlogDetail.reducers';
import {QuestionDetailReducer, QuestionCommentReducer} from '../screens/QuestionDetail/QuestionDetail.reducers';
import {BlogFormReducer} from '../screens/BlogForm/BlogForm.reducers';
import {QuestionFormReducer} from '../screens/QuestionForm/QuestionForm.reducers';
import {BlogFormEditReducer, EditReducer} from '../screens/BlogFormEdit/BlogFormEdit.reducers';
import {QuestionFormEditReducer, QuestionEditReducer} from '../screens/QuestionFormEdit/QuestionFormEdit.reducers';
import {ProfileReducer, PersonalBlogReducer, PersonalQuestionReducer, OptionModal} from '../screens/Profile/Profile.reducers';
import {ProfileEditReducer} from '../screens/ProfileEdit/ProfileEdit.reducers';
import {ProfileInfoReducer, UserBlogReducer, UserQuestionReducer} from '../screens/ProfileInfo/ProfileInfo.reducers'
import {LessonReducer} from '../screens/LessonForm/LessonForm.reducers'


const rootReducer = combineReducers({
  LoginReducer,
  UserLoginReducer,
  RegisterReducer,
  HomeReducer,
  HomeItemReducer,
  BlogTopItemReducer,
  BlogTopReducer,
  QuestionTopItemReducer,
  QuestionTopReducer,
  BlogDetailReducer,
  BlogCommentReducer,
  QuestionDetailReducer,
  QuestionCommentReducer,
  BlogFormReducer,
  AlertReducer,
  ProfileReducer,
  ProfileEditReducer,
  PersonalBlogReducer,
  PersonalQuestionReducer,
  QuestionFormReducer,
  BlogFormEditReducer,
  EditReducer,
  QuestionFormEditReducer,
  QuestionEditReducer,
  OptionModal,
  LessonReducer,
  ProfileInfoReducer,
  UserBlogReducer,
  UserQuestionReducer,
  form: formReducer,
});

export default rootReducer;
