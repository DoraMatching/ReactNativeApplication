import { takeLatest, put, fork, all } from "redux-saga/effects";
import { loginFromAPI } from "../../services/Login";
import actions from "./Login.actions";

function* login(action) {
    try {
      console.log("login.saga.js beginning");
      const res = yield loginFromAPI(action.user);
      console.log("login.saga,js res: ", res);
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
  
  function* watchLogin() {
    yield takeLatest(actions.LOGIN_USER, login);
  }

  export default function* rootSaga() {
    yield all([fork(watchLogin)]);
  }