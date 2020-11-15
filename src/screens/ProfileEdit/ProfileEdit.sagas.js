import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./ProfileEdit.actions";
import {patchUserFromAPI} from '../../services/ProfileEdit';

function* editProfile(action) {
    try {
      console.log('editProfile.saga,js params: ', action.params);
      const res = yield patchUserFromAPI(action.params);
      console.log('editProfile.saga,js res: ', res);
      if (res.status === 200) {
        yield put({type: actions.UPDATE_PROFILE_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.UPDATE_PROFILE_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.UPDATE_PROFILE_FAILED, error: "Please try again!"});
    }
}

function* watchEditProfile() {
    yield takeLatest(actions.UPDATE_PROFILE, editProfile);
}

export default function* rootSaga() {
    yield all([fork(watchEditProfile)]);
  }