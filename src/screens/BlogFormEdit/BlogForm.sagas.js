import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./BlogForm.actions";
import {postBlogFromAPI} from '../../services/BlogForm';

function* createBlog(action) {
    try {
      const res = yield postBlogFromAPI(action.params);
      console.log('createBlog.saga,js res: ', res);
      if (res.status === 201) {
        yield put({type: actions.POST_BLOG_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.POST_BLOG_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.POST_BLOG_FAILED, error: "Please try again!"});
    }
}

function* watchCreateBlog() {
    yield takeLatest(actions.POST_BLOG, createBlog);
}

export default function* rootSaga() {
    yield all([fork(watchCreateBlog)]);
  }