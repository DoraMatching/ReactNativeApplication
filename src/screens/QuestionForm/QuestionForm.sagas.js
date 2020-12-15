import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./QuestionForm.actions";
import {postQuestionFromAPI} from '../../services/QuestionForm';

function* createQuestion(action) {
    try {
      const res = yield postQuestionFromAPI(action.params);
      console.log('createQuestion.saga,js res: ', res);
      if (res.status === 201) {
        yield put({type: actions.POST_QUESTION_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.POST_QUESTION_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.POST_QUESTION_FAILED, error: "Please try again!"});
    }
}

function* watchCreateQuestion() {
    yield takeLatest(actions.POST_QUESTION, createQuestion);
}

export default function* rootSaga() {
    yield all([fork(watchCreateQuestion)]);
  }