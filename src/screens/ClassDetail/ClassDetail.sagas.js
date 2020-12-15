import {all, fork, put, takeLatest} from "redux-saga/effects";
import {
  getClassDetailFromAPI,
  getClassRegisterFromAPI,
  getClassDeregisterFromAPI,
} from "../../services/ClassDetail";
import actions from "./ClassDetail.actions";

function* fetchClassDetail(action) {
  try {
    console.log("ClassDetail params", action.params);
    const res = yield getClassDetailFromAPI(action.params);

    if (res.status === 200) {
      //console.log("ClassDetail.saga.js: ", res.data);
      yield put({type: actions.GET_CLASS_DETAIL_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_CLASS_DETAIL_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_CLASS_DETAIL_FAILED, error});
  }
}

function* watchFetchClassDetail() {
  //console.log("ClassDetail.saga.js: watchFetchClassDetail");
  yield takeLatest(actions.GET_CLASS_DETAIL, fetchClassDetail);
}

function* fetchClassRegister(action) {
  try {
    const res = yield getClassRegisterFromAPI(action.params);
    if (res.status === 200) {
      yield put({type: actions.GET_CLASS_REGISTER_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_CLASS_REGISTER_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_CLASS_REGISTER_FAILED, error});
  }
}

function* watchFetchClassRegister() {
  yield takeLatest(actions.GET_CLASS_REGISTER, fetchClassRegister);
}

function* fetchClassDeregister(action) {
  try {
    const res = yield getClassDeregisterFromAPI(action.params);
    if (res.status === 200) {
      yield put({type: actions.GET_CLASS_DEREGISTER_SUCCEEDED, data: res.data});
    } else {
      yield put({
        type: actions.GET_CLASS_DEREGISTER_FAILED,
        error: res.message,
      });
    }
  } catch (error) {
    yield put({type: actions.GET_CLASS_DEREGISTER_FAILED, error});
  }
}

function* watchFetchClassDeregister() {
  yield takeLatest(actions.GET_CLASS_DEREGISTER, fetchClassDeregister);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchClassDetail),
    fork(watchFetchClassRegister),
    fork(watchFetchClassDeregister),
  ]);
}
