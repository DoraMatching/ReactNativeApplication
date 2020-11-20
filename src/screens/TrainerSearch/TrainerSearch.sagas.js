import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI, deleteDataFromAPI} from "../../services/TrainerSearch";
import actions from "./TrainerSearch.actions";

// function* fetchTrainerTag(action) {
//   try {
//     const res = yield getDataFromAPI(action.params);

//     if (res.status === 200) {
//       //console.log("blogSearch.saga.js: tag", res.data);
//       yield put({type: actions.GET_TRAINER_TAG_SUCCEEDED, data: res.data});
//     } else {
//       yield put({type: actions.GET_TRAINER_TAG_FAILED, error: res.message});
//     }
//   } catch (error) {
//     yield put({type: actions.GET_TRAINER_TAG_FAILED, error});
//   }
// }

function* fetchTrainerTop(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("blogSearch.saga.js: top", res.data);
      yield put({type: actions.GET_TRAINER_TOP_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_TRAINER_TOP_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_TRAINER_TOP_FAILED, error});
  }
}

function* refreshData(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("home.saga.js: data", res.data);
      yield put({type: actions.REFRESH_DATA_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.REFRESH_DATA_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.REFRESH_DATA_FAILED, error});
  }
}

function* deleteTrainer(action) {
  try {
    console.log("deleteTrainer: params", action.params);
    const res = yield deleteDataFromAPI(action.params);
    console.log("deleteTrainer: response", res);
    if (res.status === 200) {
      //console.log("blogSearch.saga.js: top", res.data);
      yield put({
        type: actions.DELETE_TRAINER_SUCCEEDED,
        data: res.data.message,
        id: action.params.id,
      });
    } else {
      yield put({type: actions.DELETE_TRAINER_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.DELETE_TRAINER_FAILED, error});
  }
}

function* watchDeleteTrainer() {
  //console.log("blogSearch.saga.js: watchDelete");
  yield takeLatest(actions.DELETE_TRAINER, deleteTrainer);
}

function* watchFetchTrainerTop() {
  //console.log("blogSearch.saga.js: watchFetch");
  yield takeLatest(actions.GET_TRAINER_TOP, fetchTrainerTop);
}

function* watchRefreshData() {
  //console.log("blogSearch.saga.js: data", "watchFetchData");
  yield takeLatest(actions.REFRESH_DATA, refreshData);
}


// function* watchFetchTrainerTag() {
//   //console.log("blogSearch.saga.js: watchFetch");
//   yield takeLatest(actions.GET_TRAINER_TAG, fetchTrainerTag);
// }
export default function* rootSaga() {
  yield all([fork(watchDeleteTrainer), fork(watchFetchTrainerTop), fork(watchRefreshData)]);
}
