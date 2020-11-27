import { all, fork, put, takeLatest } from "redux-saga/effects";
import { getUserFromAPI } from "../../services/Profile";
import { getUserClassroomFromAPI, getMoreUserClassroomFromAPI } from "../../services/ProfileInfo";
import { getTrainerFromAPI } from "../../services/TrainerSearch";
import actions from "./ProfileInfo.actions";

function* fetchUser(action) {
  try {
    //console.log("profile nfo params", action.params);
    const res = yield getUserFromAPI(action.params);

    if (res.status === 200) {
      //console.log("Profile.saga.js: ", res.data);
      yield put({type: actions.GET_PROFILE_INFO_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_PROFILE_INFO_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_PROFILE_INFO_FAILED, error});
  }
}

function* watchFetchUser() {
  //console.log("Profile.saga.js: watchFetchUser");
  yield takeLatest(actions.GET_PROFILE_INFO, fetchUser);
}

function* fetchUserClassroom(action) {
  try {
    //console.log("fetchUserClassroom", action.params);
    const res = yield getTrainerFromAPI(action.params);
    //console.log("getTrainerFromAPI ", res);
    if (res.status === 200) {
      //console.log("1", res);
      const res2 = yield getUserClassroomFromAPI({id : res.data.id, token : action.params.token});
      //console.log("getUserClassroomFromAPI: ", res);
      if (res2.status === 200) {
        //console.log("Profile.saga.js: ", res.data);
        yield put({
          type: actions.GET_PROFILE_INFO_CLASSROOM_SUCCEEDED,
          data: res2.data,
        });
      } else {
        yield put({
          type: actions.GET_PROFILE_INFO_CLASSROOM_FAILED,
          error: res2.message,
        });
      }
    } else {
      yield put({
        type: actions.GET_PROFILE_INFO_CLASSROOM_FAILED,
        error: res.message,
      });
    }
  } catch (error) {
    yield put({type: actions.GET_PROFILE_INFO_CLASSROOM_FAILED, error});
  }
}

function* watchFetchUserClassroom() {
  //console.log("Profile.saga.js: watchFetchUser");
  yield takeLatest(actions.GET_PROFILE_INFO_CLASSROOM, fetchUserClassroom);
}

function* refreshData(action) {
  try {
    //console.log("fetchUserClassroom", action.params);
    const res = yield getTrainerFromAPI(action.params);
    //console.log("getTrainerFromAPI ", res);
    if (res.status === 200) {
      //console.log("1", res);
      const res2 = yield getUserClassroomFromAPI({id : res.data.id, token : action.params.token});
      //console.log("getUserClassroomFromAPI: ", res);
      if (res2.status === 200) {
        //console.log("Profile.saga.js: ", res.data);
        yield put({
          type: actions.REFRESH_PROFILE_INFO_CLASSROOM_SUCCEEDED,
          data: res2.data,
        });
      } else {
        yield put({
          type: actions.REFRESH_PROFILE_INFO_CLASSROOM_FAILED,
          error: res2.message,
        });
      }
    } else {
      yield put({
        type: actions.REFRESH_PROFILE_INFO_CLASSROOM_FAILED,
        error: res.message,
      });
    }
  } catch (error) {
    yield put({type: actions.REFRESH_PROFILE_INFO_CLASSROOM_FAILED, error});
  }
}

function* watchRefreshData() {
  //console.log("blogSearch.saga.js: data", "watchFetchData");
  yield takeLatest(actions.REFRESH_PROFILE_INFO_CLASSROOM, refreshData);
}

function* fetchMoreUserClassroom(action) {
  try {
    const res = yield getMoreUserClassroomFromAPI({url :action.params.url, token : action.params.token});

    if (res.status === 200) {
      //console.log("blogSearch.saga.js: top", res.data);
      yield put({type: actions.GET_PROFILE_INFO_CLASSROOM_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_PROFILE_INFO_CLASSROOM_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_PROFILE_INFO_CLASSROOM_FAILED, error});
  }
}
function* watchFetchMoreUserClassroom() {
  //console.log("Profile.saga.js: watchFetchUser");
  yield takeLatest(actions.GET_MORE_PROFILE_INFO_CLASSROOM, fetchUserClassroom);
}

export default function* rootSaga() {
  yield all([fork(watchFetchUser), fork(watchFetchUserClassroom), fork(watchRefreshData), fork(watchFetchMoreUserClassroom)]);
}
