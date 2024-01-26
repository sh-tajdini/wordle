import { createSlice } from '@reduxjs/toolkit';

// reducer slices
// import startGame from './startGame';
// import endGame from './endGame';
import makeGuess from './makeGuess';
import { GameStoreType } from '../../schema/Game';

const initialState:GameStoreType = {
  requestPending: false,
  guessInfo: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    ...makeGuess,

  },
});
const { actions, reducer } = gameSlice;
export const { doMakeGuess, successfulMakeGuess } = actions;

export default reducer;


