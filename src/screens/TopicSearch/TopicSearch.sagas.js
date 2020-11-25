import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI, deleteDataFromAPI} from "../../services/TopicSearch";
import actions from "./TopicSearch.actions";

// function* fetchTopicTag(action) {
//   try {
//     const res = yield getDataFromAPI(action.params);

//     if (res.status === 200) {
//       //console.log("blogSearch.saga.js: tag", res.data);
//       yield put({type: actions.GET_TOPIC_TAG_SUCCEEDED, data: res.data});
//     } else {
//       yield put({type: actions.GET_TOPIC_TAG_FAILED, error: res.message});
//     }
//   } catch (error) {
//     yield put({type: actions.GET_TOPIC_TAG_FAILED, error});
//   }
// }

function* fetchTopicTop(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("blogSearch.saga.js: top", res.data);
      yield put({type: actions.GET_TOPIC_TOP_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_TOPIC_TOP_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_TOPIC_TOP_FAILED, error});
  }
}

function* refreshData(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      //console.log("home.saga.js: data", res.data);
      yield put({type: actions.REFRESH_DATA_TOPIC_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.REFRESH_DATA_TOPIC_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.REFRESH_DATA_TOPIC_FAILED, error});
  }
}

function* deleteTopic(action) {
  try {
    console.log("deleteTopic: params", action.params);
    const res = yield deleteDataFromAPI(action.params);
    console.log("deleteTopic: response", res);
    if (res.status === 200) {
      //console.log("blogSearch.saga.js: top", res.data);
      yield put({
        type: actions.DELETE_TOPIC_SUCCEEDED,
        data: res.data.message,
        id: action.params.id,
      });
    } else {
      yield put({type: actions.DELETE_TOPIC_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.DELETE_TOPIC_FAILED, error});
  }
}

function* watchDeleteTopic() {
  //console.log("blogSearch.saga.js: watchDelete");
  yield takeLatest(actions.DELETE_TOPIC, deleteTopic);
}

function* watchFetchTopicTop() {
  //console.log("blogSearch.saga.js: watchFetch");
  yield takeLatest(actions.GET_TOPIC_TOP, fetchTopicTop);
}

function* watchRefreshData() {
  //console.log("blogSearch.saga.js: data", "watchFetchData");
  yield takeLatest(actions.REFRESH_DATA_TOPIC, refreshData);
}


// function* watchFetchTopicTag() {
//   //console.log("blogSearch.saga.js: watchFetch");
//   yield takeLatest(actions.GET_TOPIC_TAG, fetchTopicTag);
// }
export default function* rootSaga() {
  yield all([fork(watchDeleteTopic), fork(watchFetchTopicTop), fork(watchRefreshData)]);
}
