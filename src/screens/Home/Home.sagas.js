import {all, fork, put, takeLatest} from "redux-saga/effects";
import {getBlogsFromAPI, getQuestionsFromAPI} from "../../services/Home";
import actions from "./Home.actions";

function* fetchBlogs(action) {
  try {
    const res = yield getBlogsFromAPI(action.params);

    if (res.status === 200) {
      yield put({type: actions.GET_BLOG_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_BLOG_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_BLOG_FAILED, error});
  }
}

function* fetchQuestions(action) {
  try {
    const res = yield getQuestionsFromAPI(action.params);

    if (res.status === 200) {
      yield put({type: actions.GET_QUESTION_SUCCEEDED, data: res.data});
    } else {
      yield put({type: actions.GET_QUESTION_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.GET_QUESTION_FAILED, error});
  }
}

function* fetchBlogsQuestions(action) {
  try {
    const {urlBlog, urlQuestion} = action.params;
    let resQuestion = null,
      resBlog = null;
    let failed = 0;
    const data = {
      blogs: {items: [], links: {next: ""}},
      questions: {items: [], links: {next: ""}},
    };

    if (urlBlog !== "") {
      resBlog = yield getBlogsFromAPI({url: urlBlog});
      if (resBlog.status === 200) {
        data.blogs = resBlog.data;
      } else {
        failed++;
      }
    }
    if (urlQuestion !== "") {
      resQuestion = yield getQuestionsFromAPI({url: urlQuestion});
      if (resQuestion.status === 200) {
        data.questions = resQuestion.data;
      } else {
        failed++;
      }
    }

    if (failed === 0) {
      yield put({type: actions.GET_BLOG_QUESTION_SUCCEEDED, data: data});
    } else {
      yield put({
        type: actions.GET_BLOG_QUESTION_FAILED,
        error: "Please try again",
      });
    }
  } catch (error) {
    yield put({type: actions.GET_BLOG_QUESTION_FAILED, error});
  }
}

function* watchFetchBlogs() {
  yield takeLatest(actions.GET_BLOG, fetchBlogs);
}

function* watchFetchQuestions() {
  yield takeLatest(actions.GET_QUESTION, fetchQuestions);
}

function* watchFetchBlogsQuestions() {
  yield takeLatest(actions.GET_BLOG_QUESTION, fetchBlogsQuestions);
}

export default function* rootSaga() {
  yield all([fork(watchFetchBlogsQuestions)]);
}
