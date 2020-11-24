import {all} from "redux-saga/effects";
import HomeSaga from "../screens/Home/Home.sagas";
import LoginSaga from "../screens/Login/Login.sagas";
import RegisterSaga from "../screens/Register/Register.sagas";
import BlogSearchSaga from "../screens/BlogSearch/BlogSearch.sagas";
import QuestionSearchSaga from "../screens/QuestionSearch/QuestionSearch.sagas";
import TrainerSearchSaga from "../screens/TrainerSearch/TrainerSearch.sagas";
import BlogDetailSaga from "../screens/BlogDetail/BlogDetail.sagas";
import QuestionDetailSaga from "../screens/QuestionDetail/QuestionDetail.sagas";
import BlogFormSaga from "../screens/BlogForm/BlogForm.sagas";
import BlogFormEditSaga from "../screens/BlogFormEdit/BlogFormEdit.sagas";

import QuestionFormSaga from "../screens/QuestionForm/QuestionForm.sagas";
import QuestionFormEditSaga from "../screens/QuestionFormEdit/QuestionFormEdit.sagas";

import ProfileSaga from "../screens/Profile/Profile.sagas";
import ProfileEditSaga from "../screens/ProfileEdit/ProfileEdit.sagas";
import ProfileInfoSaga from "../screens/ProfileInfo/ProfileInfo.sagas";

import TopicFormSaga from "../screens/TopicForm/TopicForm.sagas";
import TopicSearchSaga from "../screens/TopicSearch/TopicSearch.sagas";

import TagPredictionSaga from "../screens/TagPrediction/TagPrediction.sagas";

import TopicDetailSaga from "../screens/TopicDetail/TopicDetail.sagas";

import TrainerRegisterSaga from "../screens/TrainerRegister/TrainerRegister.sagas";

import ClassFormSaga from "../screens/ClassForm/ClassForm.sagas";

import ClassDetailSaga from "../screens/ClassDetail/ClassDetail.sagas";

import LessonFormSaga from "../screens/LessonForm/LessonForm.sagas";

import ScheduleSaga from '../screens/Schedule/Schedule.sagas'
export default function* rootSaga() {
  yield all([
    LoginSaga(),
    RegisterSaga(),
    HomeSaga(),
    BlogSearchSaga(),
    QuestionSearchSaga(),
    BlogDetailSaga(),
    QuestionDetailSaga(),
    BlogFormSaga(),
    QuestionFormSaga(),
    ProfileSaga(),
    BlogFormEditSaga(),
    QuestionFormEditSaga(),
    ProfileEditSaga(),
    ProfileInfoSaga(),
    TopicFormSaga(),
    TopicSearchSaga(),
    TopicDetailSaga(),
    TagPredictionSaga(),

    TrainerSearchSaga(),
    TrainerRegisterSaga(),

    ClassFormSaga(),
    ClassDetailSaga(),

    LessonFormSaga(),
    ScheduleSaga(),
  ]);
}
