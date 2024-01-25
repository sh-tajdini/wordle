import { GameStoreType } from "../../schema/Game";

  const startGame = {
    doStartGame: (state:GameStoreType) => {
        state.gameStarted = true;
        return state;
      },
  };
  
  export default startGame;
  