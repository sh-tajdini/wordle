import { createSlice } from '@reduxjs/toolkit';
import { GameStoreType } from '../../schema/Game';

// reducer slices
import startGame from './startGame';

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
  },
});
const { actions, reducer } = gameSlice;
export const { doStartGame } = actions;

export default reducer;


