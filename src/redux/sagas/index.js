import {all} from 'redux-saga/effects';
import RandomUserSaga from './RandomUserSaga';

export default function* sagas() {
  yield all([RandomUserSaga()]);
}
