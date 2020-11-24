import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI} from "../../services/Schedule";
import actions from "./Schedule.actions";
import {getTrainerFromAPI} from "../../services/TrainerSearch";

// function* fetchPersonalSchedule(action) {
//   try {
//     const res = yield getDataFromAPI(action.params);

//     if (res.status === 200) {
//       //console.log("blogSearch.saga.js: top", res.data);
//       yield put({type: actions.GET_PERSONAL_SCHEDULE_SUCCEEDED, data: res.data});
//     } else {
//       yield put({type: actions.GET_PERSONAL_SCHEDULE_FAILED, error: res.message});
//     }
//   } catch (error) {
//     yield put({type: actions.GET_PERSONAL_SCHEDULE_FAILED, error});
//   }
// }

function* fetchPersonalSchedule(action) {
    try {
        //console.log("fetchUserClassroom", action.params);
        const res = yield getTrainerFromAPI(action.params);
       // console.log("getTrainerFromAPI ", res);
        if (res.status === 200) {
        // console.log("1", res);
         const {token ,startTime, endTime} = action.params;
          const res2 = yield getDataFromAPI({id : res.data.id, token, startTime, endTime});
         // console.log("getUserClassroomFromAPI: ", res);
          if (res2.status === 200) {
            //console.log("Profile.saga.js: ", res.data);
            yield put({
              type: actions.GET_PERSONAL_SCHEDULE_SUCCEEDED,
              data: res2.data,
            });
          } else {
            yield put({
              type: actions.GET_PERSONAL_SCHEDULE_FAILED,
              error: res2.message,
            });
          }
        } else {
          yield put({
            type: actions.GET_PERSONAL_SCHEDULE_FAILED,
            error: res.message,
          });
        }
      } catch (error) {
          console.log(error);
        yield put({type: actions.GET_PERSONAL_SCHEDULE_FAILED, error});
      }
}


function* watchFetchPersonalSchedule() {
  //console.log("blogSearch.saga.js: watchFetch");
  yield takeLatest(actions.GET_PERSONAL_SCHEDULE, fetchPersonalSchedule);
}





export default function* rootSaga() {
  yield all([fork(watchFetchPersonalSchedule)]);
}