import { GameActionType, GameStoreType } from "../../schema/Game";

  const makeGuess = {
    doMakeGuess: (state:GameStoreType, action:GameActionType) => {
      state.guesses.push(action.payload.guess);
        return state;
      },
  };
  
  export default makeGuess;
  