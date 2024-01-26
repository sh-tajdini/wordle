/* eslint-disable @typescript-eslint/no-unused-vars */

import { GameActionType, GameStoreType } from "../../schema/Game";


  const makeGuess = {
    doMakeGuess: (state:GameStoreType, action:GameActionType) => {
      state.requestPending = true;
        return state;
      },
      successfulMakeGuess: (state:GameStoreType, action:GameActionType) => {
        if(action.payload.isValid)
        state.guessInfo = [...state.guessInfo, action.payload]; 
        state.requestPending = false;
        return state;
        },
  };
  
  export default makeGuess;
  