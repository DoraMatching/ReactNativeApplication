import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI} from "../../services/ClassSearch";
import actions from "./ClassSearch.actions";

function* fetchData(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("ClassSearch.saga.js: data", res.data);
      yield put({type: actions.GET_CLASS_SEARCH_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_CLASS_SEARCH_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_CLASS_SEARCH_FAILED, error});
  }
}

function* refreshData(action) {
  try {
    console.log("refresh data", action.params);
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      console.log("refreshData: data", res.data);
      yield put({type: actions.REFRESH_CLASS_SEARCH_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.REFRESH_CLASS_SEARCH_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.REFRESH_CLASS_SEARCH_FAILED, error});
  }
}

function* watchFetchData() {
  //console.log("ClassSearch.saga.js: data", "watchFetchData");
  yield takeLatest(actions.GET_CLASS_SEARCH, fetchData);
}

function* watchRefreshData() {
  //console.log("ClassSearch.saga.js: data", "watchFetchData");
  yield takeLatest(actions.REFRESH_CLASS_SEARCH, refreshData);
}

export default function* rootSaga() {
  yield all([fork(watchFetchData), fork(watchRefreshData)]);
}
