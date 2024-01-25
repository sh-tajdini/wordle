import { all, fork } from 'redux-saga/effects';
import makeGuessSaga from './sagas/makeGuessSaga';



function* mySaga():Generator {
  try {
    yield all([
      fork(makeGuessSaga),
    ]);
  } catch (error) {
    mySaga();
  }
}
export default mySaga;
