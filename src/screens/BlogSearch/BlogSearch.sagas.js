import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getDataFromAPI, deleteDataFromAPI} from "../../services/BlogSearch";
import actions from "./BlogSearch.actions";

// function* fetchBlogTag(action) {
//   try {
//     const res = yield getDataFromAPI(action.params);

//     if (res.status === 200) {
//       console.log("blogSearch.saga.js: tag", res.data);
//       yield put({type: actions.GET_BLOG_TAG_SUCCEEDED, data: res.data});
//     } else {
//       yield put({type: actions.GET_BLOG_TAG_FAILED, error: res.message});
//     }
//   } catch (error) {
//     yield put({type: actions.GET_BLOG_TAG_FAILED, error});
//   }
// }

function* fetchBlogTop(action) {
  try {
    const res = yield getDataFromAPI(action.params);

    if (res.status === 200) {
      console.log("blogSearch.saga.js: top", res.data);
      yield put({type: actions.GET_BLOG_TOP_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_BLOG_TOP_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_BLOG_TOP_FAILED, error});
  }
}

function* deleteBlog(action) {
  try {
    console.log("deleteBlog: params", action.params);
    const res = yield deleteDataFromAPI(action.params);
    console.log("deleteBlog: response", res);
    if (res.status === 202) {
      console.log("blogSearch.saga.js: top", res.data);
      yield put({type: actions.DELETE_BLOG_SUCCEEDED, data: res.data.message, id: action.params.id});
    } else {
      yield put({type: actions.DELETE_BLOG_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.DELETE_BLOG_FAILED, error});
  }
}

// function* watchFetchBlogTag() {
//   console.log("blogSearch.saga.js: watchFetch");
//   yield takeLatest(actions.GET_BLOG_TAG, fetchBlogTag);
// }
function* watchFetchBlogTop() {
  console.log("blogSearch.saga.js: watchFetch");
  yield takeLatest(actions.GET_BLOG_TOP, fetchBlogTop);
}

function* watchDeleteBlog() {
  console.log("blogSearch.saga.js: watchDeleteBlog");
  yield takeLatest(actions.DELETE_BLOG, deleteBlog);
}

export default function* rootSaga() {
  yield all([fork(watchFetchBlogTop), fork(watchDeleteBlog)]);
}
