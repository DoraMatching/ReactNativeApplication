import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getUserFromAPI, getUserClassFromAPI} from "../../services/Profile";
import {getIDFromAPI} from "../../services/TrainerSearch";
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

function* fetchPersonalClasses(action) {
  try {
      const res = yield getIDFromAPI({role : "trainee", ...action.params});
    
      if (res.status === 200) {
      
       const {token} = action.params;
        const res2 = yield getUserClassFromAPI({id : res.data.id, token});
       
        if (res2.status === 200) {
         
          yield put({
            type: actions.GET_PROFILE_CLASSES_SUCCEEDED,
            data: res2.data,
          });
        } else {
          yield put({
            type: actions.GET_PROFILE_CLASSES_FAILED,
            error: res2.message,
          });
        }
      } else {
        yield put({
          type: actions.GET_PROFILE_CLASSES_FAILED,
          error: res.message,
        });
      }
    } catch (error) {
        console.log(error);
      yield put({type: actions.GET_PROFILE_CLASSES_FAILED, error});
    }
}


function* watchFetchPersonalClasses() {
//console.log("blogSearch.saga.js: watchFetch");
yield takeLatest(actions.GET_PROFILE_CLASSES, fetchPersonalClasses);
}

export default function* rootSaga() {
  yield all([fork(watchFetchUser), fork(watchFetchPersonalClasses)]);
}
