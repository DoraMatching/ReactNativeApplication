import { all } from 'redux-saga/effects';

import LoginSaga from '../screens/Login/Login.sagas';
import RegisterSaga from '../screens/Register/Register.sagas';
import HomeSaga from '../screens/Home/Home.sagas';

export default function* rootSaga() {
  yield all([
    LoginSaga(),
    RegisterSaga(),
    HomeSaga(),
  ]);
}