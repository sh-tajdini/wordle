import { GameActionType, GameStoreType } from "../../schema/Game";

  const updateScore = {
    doUpdateScore: (state:GameStoreType,action:GameActionType) => {
      state.score = action.payload.score;
        return state;
      },
  };
  
  export default updateScore;
  