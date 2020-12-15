import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./BlogDetail.actions";
import {postBlogCommentFromAPI, patchBlogCommentFromAPI, getBlogDetailFromAPI} from '../../services/BlogDetail';

function* createBlogComment(action) {
    try {
      const res = yield postBlogCommentFromAPI(action.params);
      //console.log('BlogDetail.saga,js res: ', res);
      if (res.status === 201) {
        yield put({type: actions.POST_BLOG_COMMENT_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.POST_BLOG_COMMENT_FAILED, error: res.message});
      }
    } catch (error) {
      
      yield put({type: actions.POST_BLOG_COMMENT_FAILED, error: "Please try again!"});
    }
}

function* editBlogComment(action) {
  try {
    //console.log('patchBlogCommentFromAPI.saga,js params: ', action.params);
    const res = yield patchBlogCommentFromAPI(action.params);
    //console.log('patchBlogCommentFromAPI.saga,js res: ', res);
    if (res.status === 200) {
      yield put({type: actions.PATCH_BLOG_COMMENT_SUCCEEDED, data: res.data, blogID : action.params.blogID});
    } else {
      yield put({type: actions.PATCH_BLOG_COMMENT_FAILED, error: res.message});
    }
  } catch (error) {
    console.log(error);
    yield put({type: actions.PATCH_BLOG_COMMENT_FAILED, error: "Please try again!"});
  }
}

function* getBlogDetail(action) {
  try {
    //console.log('getBlogDetail.saga,js params: ', action.params);
    const res = yield getBlogDetailFromAPI(action.params);
    //console.log('getBlogDetail.saga,js res: ', res);
    if (res.status === 200) {
      yield put({type: actions.GET_BLOG_DETAIL_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_BLOG_DETAIL_FAILED, error: res.message});
    }
  } catch (error) {
    console.log(error);
    yield put({type: actions.GET_BLOG_DETAIL_FAILED, error: "Please try again!"});
  }
}

function* watchCreateBlogComment() {
    yield takeLatest(actions.POST_BLOG_COMMENT, createBlogComment);
}

function* watchEditBlogComment() {
  yield takeLatest(actions.PATCH_BLOG_COMMENT, editBlogComment);
}

function* watchFetchBlogDetail() {
  yield takeLatest(actions.GET_BLOG_DETAIL, getBlogDetail);
}

export default function* rootSaga() {
    yield all([fork(watchCreateBlogComment),fork(watchEditBlogComment),fork(watchFetchBlogDetail)]);
  }
  