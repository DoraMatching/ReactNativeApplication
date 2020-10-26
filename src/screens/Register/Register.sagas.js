import {takeLatest, put, fork, all} from "redux-saga/effects";
import {registerFromAPI} from "../../services/Register";
import actions from "./Register.actions";

function* register(action) {
  try {
    console.log("register.saga.js");
    const res = yield registerFromAPI(action.user);

    if (res.status === 201) {
      console.log(res.data);

      yield put({type: actions.REGISTER_SUCCEEDED, response: res.data});
    } else {
      yield put({type: actions.REGISTER_FAILED, error: res.message});
    }
  } catch (error) {
    yield put({type: actions.REGISTER_FAILED, error: "Try again !"});
  }
}

function* watchRegister() {
  yield takeLatest(actions.REGISTER_USER, register);
}

export default function* rootSaga() {
  yield all([fork(watchRegister)]);
}
