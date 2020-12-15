import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./TagPrediction.actions";
import {postTagPredictionFromAPI} from "../../services/TagPrediction";

function* receiveTag(action) {
  try {
    const res = yield postTagPredictionFromAPI(action.params);
    console.log("receiveTag.saga,js res: ", res);
    if (res.status === 201) {
      yield put({type: actions.POST_TAG_PREDICTION_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.POST_TAG_PREDICTION_FAILED, error: res.message});
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: actions.POST_TAG_PREDICTION_FAILED,
      error: "Please try again!",
    });
  }
}

function* watchReceiveTag() {
  yield takeLatest(actions.POST_TAG_PREDICTION, receiveTag);
}

export default function* rootSaga() {
  yield all([fork(watchReceiveTag)]);
}
