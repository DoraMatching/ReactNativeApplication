import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./BlogFormEdit.actions";
import {patchBlogFromAPI} from '../../services/BlogForm';

function* editBlog(action) {
    try {
      console.log('editBlog.saga,js params: ', action.params);
      const res = yield patchBlogFromAPI(action.params);
      console.log('editBlog.saga,js res: ', res);
      if (res.status === 200) {
        yield put({type: actions.UPDATE_BLOG_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.UPDATE_BLOG_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.UPDATE_BLOG_FAILED, error: "Please try again!"});
    }
}

function* watchEditBlog() {
    yield takeLatest(actions.UPDATE_BLOG, editBlog);
}

export default function* rootSaga() {
    yield all([fork(watchEditBlog)]);
  }