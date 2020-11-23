import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI, deleteDataFromAPI} from "../../services/QuestionSearch";
import actions from "./QuestionSearch.actions";

// function* fetchQuestionTag(action) {
//   try {
//     const res = yield getDataFromAPI(action.params);

//     if (res.status === 200) {
//       //console.log("blogSearch.saga.js: tag", res.data);
//       yield put({type: actions.GET_QUESTION_TAG_SUCCEEDED, data: res.data});
//     } else {
//       yield put({type: actions.GET_QUESTION_TAG_FAILED, error: res.message});
//     }
//   } catch (error) {
//     yield put({type: actions.GET_QUESTION_TAG_FAILED, error});
//   }
// }

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

function* refreshData(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("home.saga.js: data", res.data);
      yield put({type: actions.REFRESH_DATA_QUESTION_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.REFRESH_DATA_QUESTION_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.REFRESH_DATA_QUESTION_FAILED, error});
  }
}

function* deleteQuestion(action) {
  try {
    console.log("deleteQuestion: params", action.params);
    const res = yield deleteDataFromAPI(action.params);
    console.log("deleteQuestion: response", res);
    if (res.status === 200) {
      //console.log("blogSearch.saga.js: top", res.data);
      yield put({
        type: actions.DELETE_QUESTION_SUCCEEDED,
        data: res.data.message,
        id: action.params.id,
      });
    } else {
      yield put({type: actions.DELETE_QUESTION_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.DELETE_QUESTION_FAILED, error});
  }
}

function* watchDeleteQuestion() {
  //console.log("blogSearch.saga.js: watchDelete");
  yield takeLatest(actions.DELETE_QUESTION, deleteQuestion);
}

function* watchFetchQuestionTop() {
  //console.log("blogSearch.saga.js: watchFetch");
  yield takeLatest(actions.GET_QUESTION_TOP, fetchQuestionTop);
}

function* watchRefreshData() {
  //console.log("blogSearch.saga.js: data", "watchFetchData");
  yield takeLatest(actions.REFRESH_DATA_QUESTION, refreshData);
}


// function* watchFetchQuestionTag() {
//   //console.log("blogSearch.saga.js: watchFetch");
//   yield takeLatest(actions.GET_QUESTION_TAG, fetchQuestionTag);
// }
export default function* rootSaga() {
  yield all([fork(watchDeleteQuestion), fork(watchFetchQuestionTop), fork(watchRefreshData)]);
}
