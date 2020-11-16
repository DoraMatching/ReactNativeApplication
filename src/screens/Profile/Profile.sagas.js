import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getUserFromAPI} from "../../services/Profile";
import actions from "./Profile.actions";

function* fetchUser(action) {
  try {
    console.log("profile params", action.params);
    const res = yield getUserFromAPI(action.params);

    if (res.status === 200) {
      //console.log("Profile.saga.js: ", res.data);
      yield put({type: actions.GET_PROFILE_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_PROFILE_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_PROFILE_FAILED, error});
  }
}

function* watchFetchUser() {
  //console.log("Profile.saga.js: watchFetchUser");
  yield takeLatest(actions.GET_PROFILE, fetchUser);
}

export default function* rootSaga() {
  yield all([fork(watchFetchUser)]);
}
