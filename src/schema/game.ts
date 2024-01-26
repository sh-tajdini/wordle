export interface GameStoreType {
    requestPending: boolean;
    guessInfo: GuessInfoType[];
  }
export interface GuessInfoType {
  guess: string,
  isValid?: boolean,
  score?: number[],
}
  export interface GameActionType {
    type: string;
    payload: {
      isValid?: boolean;
      score?: number[];
      guess: string;
    };
  }
  export interface GuessResponse {
    data: {
      is_valid_word: boolean;
      score: number[];
    };
  }
  