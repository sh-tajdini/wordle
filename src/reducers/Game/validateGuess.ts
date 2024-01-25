import { GameActionType, GameStoreType } from "../../schema/Game";

  const validateGuess = {
    doValidateGuess: (state:GameStoreType,action:GameActionType) => {
      state.isValid = action.payload.isValid;
        return state;
      },
  };
  
  export default validateGuess;
  