import { takeLatest, put, fork, all } from "redux-saga/effects";
import { getBlogsFromAPI, getQuestionsFromAPI } from "../../services/Home";
import actions from "./Home.actions";

function* fetchBlogs(action){
    try {
        // console.log("in watchFetchBlogs saga");
        // console.log("in watchFetchBlogs saga", action.params);
        const res = yield getBlogsFromAPI(action.params);
        // console.log("Blog.saga.js", res);
        if (res.status === 200) {
            // console.log("Blog.saga.js",res.data)
            
            yield put({ type: actions.GET_BLOG_SUCCEEDED, data: res.data });
          } else {
            yield put({ type: actions.GET_BLOG_FAILED, error: res.message });
          }
    }
    catch(error){
        yield put({type: actions.GET_BLOG_FAILED, error});
    }
}

function* fetchQuestions(action){
    try {
        // console.log("in fetchQuestions saga");
        // console.log("in fetchQuestions saga", action.params);
        const res = yield getQuestionsFromAPI(action.params);
        // console.log("fetchQuestions.saga.js", res);
        if (res.status === 200) {
            // console.log("fetchQuestions.saga.js",res.data)
            
            yield put({ type: actions.GET_QUESTION_SUCCEEDED, data: res.data });
          } else {
            yield put({ type: actions.GET_QUESTION_FAILED, error: res.message });
          }
    }
    catch(error){
        yield put({type: actions.GET_QUESTION_FAILED, error});
    }
}

function* watchFetchBlogs(){
    // console.log("in watchFetchBlogs");
    yield takeLatest(actions.GET_BLOG, fetchBlogs);
}

function* watchFetchQuestions(){
    yield takeLatest(actions.GET_QUESTION, fetchQuestions);
}

export default function* rootSaga() {
    yield all([fork(watchFetchBlogs), fork(watchFetchQuestions)]);
  }