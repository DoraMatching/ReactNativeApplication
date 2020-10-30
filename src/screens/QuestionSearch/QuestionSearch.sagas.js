import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI} from "../../services/QuestionSearch";
import actions from "./QuestionSearch.actions";

function* fetchQuestionTag(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("blogSearch.saga.js: tag", res.data);
      yield put({type: actions.GET_QUESTION_TAG_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_QUESTION_TAG_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_QUESTION_TAG_FAILED, error});
  }
}

function* fetchQuestionTop(action) {
    try {
      const res = yield getDataFromAPI(action.params);
  
      if (res.status === 200) {
        //console.log("blogSearch.saga.js: top", res.data);
        yield put({type: actions.GET_QUESTION_TOP_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.GET_QUESTION_TOP_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.GET_QUESTION_TOP_FAILED, error});
    }
  }

function* watchFetchQuestionTag() {
  //console.log("blogSearch.saga.js: watchFetch");
  yield takeLatest(actions.GET_QUESTION_TAG, fetchQuestionTag);
}
function* watchFetchQuestionTop() {
    //console.log("blogSearch.saga.js: watchFetch");
    yield takeLatest(actions.GET_QUESTION_TOP, fetchQuestionTop);
  }

export default function* rootSaga() {
  yield all([fork(watchFetchQuestionTag), fork(watchFetchQuestionTop)]);
}
