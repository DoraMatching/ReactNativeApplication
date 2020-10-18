import { takeLatest, put, fork, all } from "redux-saga/effects";
import { loginFromAPI, getGithubTokenAsync, loginWithGithubFromAPI } from "../../services/Login";
import actions from "./Login.actions";
import { storage } from "../../helpers/asyncStorage";

function* login(action) {
    try {
      //console.log("login.saga.js beginning");
      const res = yield loginFromAPI(action.user);
      //console.log("login.saga,js res: ", res);
      if (res.status === 201) {
        console.log(res.data)
        if (action.user.toggleCheckBox) {

            const { token } = res.data;
            yield storage.storeData(token);
            
          }
        yield put({ type: actions.LOGIN_SUCCEEDED, response: res.data });
      } else {
        yield put({ type: actions.LOGIN_FAILED, error: res.message });
      }
      
    } catch (error) {
      // console.log("in catch saga", error);
      yield put({ type: actions.LOGIN_FAILED, error: "Please try again!" });
    }
  }

  function* loginWithGithub(action) {
    try {
      //console.log("login.saga.js beginning");
      const { accessToken } = yield getGithubTokenAsync();
      console.log("login.sagas.js:", accessToken);
      const res = yield loginWithGithubFromAPI(accessToken);
      //console.log("login.saga,js res: ", res);
      if (res.status === 201) {
          console.log(res.data)
          //if (action.user.toggleCheckBox) {

              const { token } = res.data;
              yield storage.storeData(token);
              
            //}
          yield put({ type: actions.LOGIN_WITH_GITHUB_SUCCEEDED, response: res.data });
      } else {
        yield put({ type: actions.LOGIN_WITH_GITHUB_FAILED, error: res.message });
      }
      
    } catch (error) {
      // console.log("in catch saga", error);
      yield put({ type: actions.LOGIN_WITH_GITHUB_FAILED, error: "Please try again!" });
    }
  }
  
  function* watchLogin() {
    yield takeLatest(actions.LOGIN_USER, login);
  }

  function* watchLoginWithGithub() {
    yield takeLatest(actions.LOGIN_WITH_GITHUB, loginWithGithub);
  }

  export default function* rootSaga() {
    yield all([fork(watchLogin), fork(watchLoginWithGithub)]);
  }