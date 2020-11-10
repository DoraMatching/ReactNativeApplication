import {all} from "redux-saga/effects";
import HomeSaga from "../screens/Home/Home.sagas";
import LoginSaga from "../screens/Login/Login.sagas";
import RegisterSaga from "../screens/Register/Register.sagas";
import BlogSearchSaga from "../screens/BlogSearch/BlogSearch.sagas";
import QuestionSearchSaga from "../screens/QuestionSearch/QuestionSearch.sagas";
import BlogDetailSaga from '../screens/BlogDetail/BlogDetail.sagas';
import QuestionDetailSaga from '../screens/QuestionDetail/QuestionDetail.sagas';
import BlogFormSaga from '../screens/BlogForm/BlogForm.sagas';
import QuestionFormSaga from '../screens/QuestionForm/QuestionForm.sagas';
import ProfileSaga from '../screens/Profile/Profile.sagas';
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
  ]);
}
