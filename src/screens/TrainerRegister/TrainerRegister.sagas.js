import {takeLatest, put, fork, all} from "redux-saga/effects";
import actions from "./TrainerRegister.actions";
import {postTrainerFromAPI} from '../../services/TrainerRegister';

function* createTrainer(action) {
    try {
      const res = yield postTrainerFromAPI(action.params);
      console.log('createTrainer.saga,js res: ', res);
      if (res.status === 201) {
        yield put({type: actions.POST_TRAINER_REGISTER_SUCCEEDED, data: res.data});
      } else {
        yield put({type: actions.POST_TRAINER_REGISTER_FAILED, error: res.message});
      }
    } catch (error) {
      yield put({type: actions.POST_TRAINER_REGISTER_FAILED, error: "Please try again!"});
    }
}

function* watchCreateTrainer() {
    yield takeLatest(actions.POST_TRAINER_REGISTER, createTrainer);
}

export default function* rootSaga() {
    yield all([fork(watchCreateTrainer)]);
  }