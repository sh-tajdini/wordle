import { createSlice } from '@reduxjs/toolkit';
import { GameStoreType } from '../../schema/Game';

// reducer slices
import startGame from './startGame';
import validateGuess from './validateGuess';
import endGame from './endGame';
import updateScore from './updateScore';
import makeGuess from './makeGuess';

const initialState:GameStoreType = {
  gameStarted: false,
  guesses: [],
  isValid: false,
  score: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    ...startGame,
    ...validateGuess,
    ...endGame,
    ...updateScore,
    ...makeGuess,

  },
});
const { actions, reducer } = gameSlice;
export const { doStartGame } = actions;
export const { doEndGame } = actions;
export const { doUpdateScore } = actions;
export const { doValidateGuess } = actions;
export const { doMakeGuess } = actions;

export default reducer;


