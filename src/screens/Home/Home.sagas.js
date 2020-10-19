import { takeLatest, put, fork, all } from "redux-saga/effects";
import { getBlogsFromAPI } from "../../services/Home";
import actions from "./Home.actions";

function* fetchBlogs(action){
    try {
        const res = yield getBlogsFromAPI(action.params);
        console.log("Blog.saga.js", res);
        if (res.status === 200) {
            console.log("Blog.saga.js",res.data)
            
            yield put({ type: actions.GET_BLOG_SUCCEEDED, data: res.data });
          } else {
            yield put({ type: actions.GET_BLOG_FAILED, error: res.message });
          }
    }
    catch(error){
        yield put({type: actions.GET_BLOG_FAILED, error});
    }
}

function* watchFetchBlogs(){
    yield takeLatest(actions.GET_BLOG, fetchBlogs);
}

export default function* rootSaga() {
    yield all([fork(watchFetchBlogs)]);
  }