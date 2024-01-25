import { GameStoreType } from "../../schema/Game";

  const endGame = {
    doEndGame: (state:GameStoreType) => {
        state.gameStarted = false;
        return state;
      },
  };
  
  export default endGame;
  