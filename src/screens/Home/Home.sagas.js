import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI} from "../../services/Home";
import actions from "./Home.actions";

function* fetchData(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("home.saga.js: data", res.data);
      yield put({type: actions.GET_DATA_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_DATA_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_DATA_FAILED, error});
  }
}

function* refreshData(action) {
  try {
    console.log("refresh data", action.params);
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      console.log("refreshData: data", res.data);
      yield put({type: actions.REFRESH_DATA_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.REFRESH_DATA_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.REFRESH_DATA_FAILED, error});
  }
}

function* watchFetchData() {
  //console.log("home.saga.js: data", "watchFetchData");
  yield takeLatest(actions.GET_DATA, fetchData);
}

function* watchRefreshData() {
  //console.log("home.saga.js: data", "watchFetchData");
  yield takeLatest(actions.REFRESH_DATA, refreshData);
}

export default function* rootSaga() {
  yield all([fork(watchFetchData), fork(watchRefreshData)]);
}
