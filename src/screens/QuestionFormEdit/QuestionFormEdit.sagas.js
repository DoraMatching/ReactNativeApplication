import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./QuestionFormEdit.actions";
import {patchQuestionFromAPI} from '../../services/QuestionForm';

function* editQuestion(action) {
    try {
      console.log('editQuestion.saga,js params: ', action.params);
      const res = yield patchQuestionFromAPI(action.params);
      console.log('editQuestion.saga,js res: ', res);
      if (res.status === 200) {
        yield put({type: actions.UPDATE_QUESTION_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.UPDATE_QUESTION_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.UPDATE_QUESTION_FAILED, error: "Please try again!"});
    }
}

function* watchEditQuestion() {
    yield takeLatest(actions.UPDATE_QUESTION, editQuestion);
}

export default function* rootSaga() {
    yield all([fork(watchEditQuestion)]);
  }