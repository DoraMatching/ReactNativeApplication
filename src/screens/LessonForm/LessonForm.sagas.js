import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./LessonForm.actions";
import {
  postLessonFromAPI,
  patchLessonFromAPI,
  deleteLessonFromAPI,
  getLessonFromAPI,
  getLessonDetailFromAPI,
} from "../../services/LessonForm";

function* createLesson(action) {
  try {
    const res = yield postLessonFromAPI(action.params);
    console.log("createLesson.saga,js res: ", res);
    if (res.status === 201) {
      yield put({type: actions.POST_LESSON_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.POST_LESSON_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.POST_LESSON_FAILED, error: "Please try again!"});
  }
}

function* editLesson(action) {
  try {
    const res = yield patchLessonFromAPI(action.params);
    console.log("editLesson.saga,js res: ", res);
    if (res.status === 200) {
      yield put({type: actions.PATCH_LESSON_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.PATCH_LESSON_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.PATCH_LESSON_FAILED, error: "Please try again!"});
  }
}

function* deleteLesson(action) {
  try {
    //console.log("deleteBlog: params", action.params);
    const res = yield deleteLessonFromAPI(action.params);
    console.log("deleteLesson: response", res);
    if (res.status === 200) {
      console.log("deleteLesson", res.data);
      yield put({
        type: actions.DELETE_LESSON_SUCCEEDED,
        data: res.data.message,
        id: action.params.id,
      });
    } else {
      yield put({type: actions.DELETE_LESSON_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.DELETE_LESSON_FAILED, error});
  }
}

function* fetchLesson(action) {
  try {
    const res = yield getLessonFromAPI(action.params);
    console.log("getLesson.saga,js res: ", res);
    if (res.status === 200) {
      yield put({type: actions.GET_LESSON_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_LESSON_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_LESSON_FAILED, error: "Please try again!"});
  }
}

function* fetchLessonDetail(action) {
  try {
    const res = yield getLessonDetailFromAPI(action.params);
    console.log("getLessonDetail.saga,js res: ", res);
    if (res.status === 200) {
      yield put({type: actions.FETCH_LESSON_DETAIL_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.FETCH_LESSON_DETAIL_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.FETCH_LESSON_DETAIL_FAILED, error: "Please try again!"});
  }
}

function* watchCreateLesson() {
  yield takeLatest(actions.POST_LESSON, createLesson);
}

function* watcheEditLesson() {
  yield takeLatest(actions.PATCH_LESSON, editLesson);
}

function* watchDeleteLesson() {
  yield takeLatest(actions.DELETE_LESSON, deleteLesson);
}

function* watchFetchLesson() {
  yield takeLatest(actions.GET_LESSON, fetchLesson);
}

function* watchFetchLessonDetail() {
  yield takeLatest(actions.FETCH_LESSON_DETAIL, fetchLessonDetail);
}
export default function* rootSaga() {
  yield all([
    fork(watchCreateLesson),
    fork(watcheEditLesson),
    fork(watchDeleteLesson),
    fork(watchFetchLesson),
    fork(watchFetchLessonDetail),
  ]);
}
