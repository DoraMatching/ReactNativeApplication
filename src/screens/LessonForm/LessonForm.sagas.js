import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./LessonForm.actions";
import {postLessonFromAPI, patchLessonFromAPI, deleteLessonFromAPI} from '../../services/LessonForm';

function* createLesson(action) {
    try {
      const res = yield postLessonFromAPI(action.params);
      console.log('createLesson.saga,js res: ', res);
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
    console.log('editLesson.saga,js res: ', res);
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
      yield put({type: actions.DELETE_LESSON_SUCCEEDED, data: res.data.message, id: action.params.id});
    } else {
      yield put({type: actions.DELETE_LESSON_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.DELETE_LESSON_FAILED, error});
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

export default function* rootSaga() {
    yield all([fork(watchCreateLesson), fork(watcheEditLesson), fork(watchDeleteLesson)]);
  }