import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI} from "../../services/Schedule";
import actions from "./Schedule.actions";
import {getIDFromAPI} from "../../services/TrainerSearch";



function* fetchPersonalSchedule(action) {
    try {
        const role = action.params.roles.indexOf("TRAINER") != -1 ? "trainer" : "trainee";
        //console.log("fetchUserClassroom", action.params);
        const res = yield getIDFromAPI({role, ...action.params});
       // console.log("getTrainerFromAPI ", res);
        if (res.status === 200) {
        // console.log("1", res);
         const {token ,startTime, endTime} = action.params;
          const res2 = yield getDataFromAPI({id : res.data.id, token, startTime, endTime, role});
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
