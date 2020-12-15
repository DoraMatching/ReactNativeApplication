import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./TopicForm.actions";
import {postTopicFromAPI} from '../../services/TopicForm';

function* createTopic(action) {
    try {
      const res = yield postTopicFromAPI(action.params);
      console.log('createTopic.saga,js res: ', res);
      if (res.status === 201) {
        yield put({type: actions.POST_TOPIC_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.POST_TOPIC_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.POST_TOPIC_FAILED, error: "Please try again!"});
    }
}

function* watchCreateTopic() {
    yield takeLatest(actions.POST_TOPIC, createTopic);
}

export default function* rootSaga() {
    yield all([fork(watchCreateTopic)]);
  }