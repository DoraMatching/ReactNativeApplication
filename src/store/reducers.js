import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {HomeReducer, HomeItemReducer, AlertReducer} from "../screens/Home/Home.reducers";
import {LoginReducer, UserLoginReducer} from "../screens/Login/Login.reducers";
import RegisterReducer from "../screens/Register/Register.reducers";

import {BlogTopReducer, BlogTopItemReducer} from '../screens/BlogSearch/BlogSearch.reducers';
import {BlogDetailReducer, BlogCommentReducer} from '../screens/BlogDetail/BlogDetail.reducers';
import {BlogFormReducer} from '../screens/BlogForm/BlogForm.reducers';
import {BlogFormEditReducer, EditReducer} from '../screens/BlogFormEdit/BlogFormEdit.reducers';

import {QuestionTopItemReducer, QuestionTopReducer} from '../screens/QuestionSearch/QuestionSearch.reducers'
import {QuestionDetailReducer, QuestionCommentReducer} from '../screens/QuestionDetail/QuestionDetail.reducers';
import {QuestionFormReducer} from '../screens/QuestionForm/QuestionForm.reducers';
import {QuestionFormEditReducer, QuestionEditReducer} from '../screens/QuestionFormEdit/QuestionFormEdit.reducers';

import {ProfileReducer, PersonalBlogReducer, PersonalQuestionReducer, OptionModal} from '../screens/Profile/Profile.reducers';
import {ProfileEditReducer} from '../screens/ProfileEdit/ProfileEdit.reducers';
import {ProfileInfoReducer, UserBlogReducer, UserQuestionReducer, ProfileInfoClassroomReducer} from '../screens/ProfileInfo/ProfileInfo.reducers'

import {LessonReducer, LessonFormReducer} from '../screens/LessonForm/LessonForm.reducers'

import {TopicFormReducer} from '../screens/TopicForm/TopicForm.reducers';
import {TopicTopItemReducer, TopicTopReducer} from '../screens/TopicSearch/TopicSearch.reducers';
import {TopicDetailReducer, TopicClassReducer} from '../screens/TopicDetail/TopicDetail.reducers';


import {TagPredictionReducer} from '../screens/TagPrediction/TagPrediction.reducers';

import {TrainerTopItemReducer, TrainerTopReducer} from '../screens/TrainerSearch/TrainerSearch.reducers'

import {TrainerRegisterReducer} from '../screens/TrainerRegister/TrainerRegister.reducers'

import {ClassFormReducer} from '../screens/ClassForm/ClassForm.reducers';

import {ClassDetailReducer, ClassRegisterReducer, ClassDeregisterReducer} from '../screens/ClassDetail/ClassDetail.reducers';

const rootReducer = combineReducers({
  LoginReducer,
  UserLoginReducer,
  RegisterReducer,

  HomeReducer,
  HomeItemReducer,

  BlogTopItemReducer,
  BlogTopReducer,
  BlogDetailReducer,
  BlogCommentReducer,
  BlogFormReducer,
  BlogFormEditReducer,

  QuestionTopItemReducer,
  QuestionTopReducer,
  QuestionDetailReducer,
  QuestionCommentReducer,
  QuestionFormReducer,
  QuestionFormEditReducer,
  QuestionEditReducer,

  AlertReducer,

  ProfileReducer,
  ProfileEditReducer,
  PersonalBlogReducer,
  PersonalQuestionReducer,
  
  
  EditReducer,
  
  OptionModal,

  LessonReducer,
  LessonFormReducer,

  ProfileInfoReducer,
  ProfileInfoClassroomReducer,

  UserBlogReducer,
  UserQuestionReducer,
  
  TopicFormReducer,
  TopicTopItemReducer,
  TopicTopReducer,
  TopicClassReducer,
  
  TagPredictionReducer,

  TopicDetailReducer,

  TrainerTopItemReducer,
  TrainerTopReducer,
  TrainerRegisterReducer,

  ClassFormReducer,
  ClassDetailReducer,
  ClassRegisterReducer,
  ClassDeregisterReducer,
  form: formReducer,
});

export default rootReducer;
