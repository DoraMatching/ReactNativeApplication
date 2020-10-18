import { all } from 'redux-saga/effects';

import LoginSaga from '../screens/Login/Login.sagas';


export default function* rootSaga() {
  yield all([
    LoginSaga(),
  ]);
}