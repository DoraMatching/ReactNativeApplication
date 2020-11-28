import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./QuestionDetail.actions";
import {
  postQuestionCommentFromAPI,
  patchQuestionCommentFromAPI,
  getQuestionDetailFromAPI,
} from "../../services/QuestionDetail";

function* createQuestionComment(action) {
  try {
    const res = yield postQuestionCommentFromAPI(action.params);
    //console.log("postQuestionCommentFromAPI.saga,js res: ", res);
    if (res.status === 201) {
      yield put({
        type: actions.POST_QUESTION_COMMENT_SUCCEEDED,
        data: res.data,
      });
    } else {
      yield put({
        type: actions.POST_QUESTION_COMMENT_FAILED,
        error: res.message,
      });
    }
  } catch (error) {
    yield put({
      type: actions.POST_QUESTION_COMMENT_FAILED,
      error: "Please try again!",
    });
  }
}

function* editQuestionComment(action) {
  try {
    //console.log("patchQuestionCommentFromAPI.saga,js params: ", action.params);
    const res = yield patchQuestionCommentFromAPI(action.params);
    //console.log("patchQuestionCommentFromAPI.saga,js res: ", res);
    if (res.status === 200) {
      //console.log("before");
      yield put({
        type: actions.PATCH_QUESTION_COMMENT_SUCCEEDED,
        data: res.data,
        questionID: action.params.questionID,
      });
      //console.log("after");
    } else {
      yield put({
        type: actions.PATCH_QUESTION_COMMENT_FAILED,
        error: res.message,
      });
    }
  } catch (error) {
    yield put({
      type: actions.PATCH_QUESTION_COMMENT_FAILED,
      error: "Please try again!",
    });
  }
}

function* fetchQuestionDetail(action) {
  try {
    //console.log("patchQuestionCommentFromAPI.saga,js params: ", action.params);
    const res = yield getQuestionDetailFromAPI(action.params);
    //console.log("patchQuestionCommentFromAPI.saga,js res: ", res);
    if (res.status === 200) {
      yield put({
        type: actions.GET_QUESTION_DETAIL_SUCCEEDED,
        data: res.data,
      });
    } else {
      yield put({
        type: actions.GET_QUESTION_DETAIL_FAILED,
        error: res.message,
      });
    }
  } catch (error) {
    yield put({
      type: actions.GET_QUESTION_DETAIL_FAILED,
      error: "Please try again!",
    });
  }
}

function* watchCreateQuestionComment() {
  yield takeLatest(actions.POST_QUESTION_COMMENT, createQuestionComment);
}

function* watchEditQuestionComment() {
  yield takeLatest(actions.PATCH_QUESTION_COMMENT, editQuestionComment);
}

function* watchFetchQuestionDetail() {
  yield takeLatest(actions.GET_QUESTION_DETAIL, fetchQuestionDetail);
}

export default function* rootSaga() {
  yield all([
    fork(watchCreateQuestionComment),
    fork(watchEditQuestionComment),
    fork(watchFetchQuestionDetail),
  ]);
}
