import { combineReducers } from '@reduxjs/toolkit';
import gameReducer from './reducers/Game/gameReducer';

const rootReducer = combineReducers({
game: gameReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
