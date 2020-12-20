import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI} from "../../services/Schedule";
import actions from "./Schedule.actions";
import {getIDFromAPI} from "../../services/TrainerSearch";
const colors = ['#e6add8','#ade6d8','#d8ade6','#e6bcad'];


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

function* fetchBothPersonalSchedule(action) {
  try {
      const roles = action.params.roles;
      console.log("l46", roles);
      
      let schedule = [];
      //console.log("fetchUserClassroom", action.params);
      // yield roles.forEach(role => {
        //const role = roles[0];
        //console.log("l50", role);
        for (var role of roles){
        const res =  yield getSchedule(role.toLowerCase(), action);
        if (res.success === true) schedule = [...schedule, ...res.data];
        else {
           put({
            type: actions.GET_PERSONAL_SCHEDULE_FAILED,
            error: res.message,
          });
        }
      };
      // }});
      yield put({
        type: actions.GET_PERSONAL_SCHEDULE_SUCCEEDED,
        data: schedule,
      });
    
    } catch (error) {
        console.log(error);
      yield put({type: actions.GET_PERSONAL_SCHEDULE_FAILED, error});
    }
}
function* getSchedule(role,action){
  try {
   console.log("l73", role, action);
   
    const res = yield getIDFromAPI({role, ...action.params});
   // console.log("getTrainerFromAPI ", res);
    if (res.status === 200) {
    // console.log("1", res);
     const {token ,startTime, endTime} = action.params;
      const res2 = yield getDataFromAPI({id : res.data.id, token, startTime, endTime, role});
     // console.log("getUserClassroomFromAPI: ", res);
      if (res2.status === 200) {
        //console.log("Profile.saga.js: ", res.data);
       return {success : true, data : res2.data.map(item => {return {role, color : colors[Math.floor(Math.random() * colors.length)], ...item}}) };
      } else {
        return {success : false, error : res2.message};
      }
    } else {
      return {success : false, error : res.message};
      // yield put({
      //   type: actions.GET_PERSONAL_SCHEDULE_FAILED,
      //   error: res.message,
      // });
    }
  } catch (error) {
      console.log(error);
      return {success : false, error};
    // yield put({type: actions.GET_PERSONAL_SCHEDULE_FAILED, error});
  }
}


function* watchFetchPersonalSchedule() {
  //console.log("blogSearch.saga.js: watchFetch");
  //yield takeLatest(actions.GET_PERSONAL_SCHEDULE, fetchPersonalSchedule);
  yield takeLatest(actions.GET_PERSONAL_SCHEDULE, fetchBothPersonalSchedule);
}





export default function* rootSaga() {
  yield all([fork(watchFetchPersonalSchedule)]);
}
