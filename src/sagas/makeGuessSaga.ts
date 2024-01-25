import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { doMakeGuess, doValidateGuess } from '../reducers/Game/gameReducer';
import { GameActionType, GuessResponse } from '../schema/Game';

function* onMakeGuess(action: GameActionType):Generator {
    const url = 'https://wordle-apis.vercel.app/api/validate';
    const response = (yield call(axios.post, url, { guess: action.payload.guess })) as GuessResponse;
    yield put({ type: doValidateGuess.type, payload: { ...action.payload, isValid: response.data.isValidWord, score: response.data.score } });
}

export default function* makeGuessSaga():Generator {
  yield takeEvery(doMakeGuess.type, onMakeGuess);
}