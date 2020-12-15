import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI} from "../../services/Search";
import actions from "./Search.actions";



function* fetchSearch(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("blogSearch.saga.js: top", res.data);
      yield put({type: actions.GET_SEARCH_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_SEARCH_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_SEARCH_FAILED, error});
  }
}



function* watchFetchSearch() {
  //console.log("blogSearch.saga.js: watchFetch");
  yield takeLatest(actions.GET_SEARCH, fetchSearch);
}




// function* watchFetchQuestionTag() {
//   //console.log("blogSearch.saga.js: watchFetch");
//   yield takeLatest(actions.GET_QUESTION_TAG, fetchQuestionTag);
// }
export default function* rootSaga() {
  yield all([fork(watchFetchSearch)]);
}
