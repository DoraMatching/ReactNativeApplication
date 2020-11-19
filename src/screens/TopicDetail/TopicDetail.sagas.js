import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getTopicDetailFromAPI} from "../../services/TopicDetail";
import actions from "./TopicDetail.actions";

function* fetchTopicDetail(action) {
  try {
    console.log("TopicDetail params", action.params);
    const res = yield getTopicDetailFromAPI(action.params);

    if (res.status === 200) {
      //console.log("TopicDetail.saga.js: ", res.data);
      yield put({type: actions.GET_TOPIC_DETAIL_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_TOPIC_DETAIL_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_TOPIC_DETAIL_FAILED, error});
  }
}

function* watchFetchTopicDetail() {
  //console.log("TopicDetail.saga.js: watchFetchTopicDetail");
  yield takeLatest(actions.GET_TOPIC_DETAIL, fetchTopicDetail);
}

export default function* rootSaga() {
  yield all([fork(watchFetchTopicDetail)]);
}
