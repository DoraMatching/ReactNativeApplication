import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./ClassForm.actions";
import {postClassFromAPI} from '../../services/ClassForm';

function* createClass(action) {
    try {
      const res = yield postClassFromAPI(action.params);
      console.log('createClass.saga,js res: ', res);
      if (res.status === 201) {
        yield put({type: actions.POST_CLASS_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.POST_CLASS_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.POST_CLASS_FAILED, error: "Please try again!"});
    }
}

function* watchCreateClass() {
    yield takeLatest(actions.POST_CLASS, createClass);
}

export default function* rootSaga() {
    yield all([fork(watchCreateClass)]);
  }