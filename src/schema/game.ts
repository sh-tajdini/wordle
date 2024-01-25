export interface GameStoreType {
    gameStarted: boolean;
    guesses: string[],
    isValid: boolean,
    score: number[],
  }

  export interface GameActionType {
    type: string;
    payload: {
      isValid: boolean;
      score: number[];
      guess: string;
    };
  }