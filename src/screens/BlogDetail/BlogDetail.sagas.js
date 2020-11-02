import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./BlogDetail.actions";
import {postBlogCommentFromAPI} from '../../services/BlogDetail';

function* createBlogComment(action) {
    try {
      const res = yield postBlogCommentFromAPI(action.params);
      console.log('BlogDetail.saga,js res: ', res);
      if (res.status === 201) {
        yield put({type: actions.POST_BLOG_COMMENT_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.POST_BLOG_COMMENT_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.POST_BLOG_COMMENT_FAILED, error: "Please try again!"});
    }
}

function* watchCreateBlogComment() {
    yield takeLatest(actions.POST_BLOG_COMMENT, createBlogComment);
}

export default function* rootSaga() {
    yield all([fork(watchCreateBlogComment)]);
  }
  