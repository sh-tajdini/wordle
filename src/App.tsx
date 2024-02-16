import {Button, message} from 'antd';
import React, { useEffect, useState } from 'react';
import { Grid } from './components/grid/Grid';
import './App.css';
import { useAppSelector } from './hooks';
import { useDispatch } from 'react-redux';
import { doMakeGuess } from './reducers/Game/gameReducer';

const App = () => {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const { guessInfo } = useAppSelector((state) => state.game);
  const dispatch = useDispatch();
  const [NoOfGuesses,setGameStatus] = useState(4);

 useEffect(() => {
    if(currentGuess.length === 5)
    dispatch(doMakeGuess({ guess: currentGuess.join('') }));
  }, [currentGuess, dispatch]);

  const handleGameStatus = () => {
    setGameStatus((preNoOfGuesses) => preNoOfGuesses ===4 ? 6 : 4);
  }

  
  const handleKeyDown= (event: React.KeyboardEvent) => {

      if (event.key === 'Enter' && currentGuess.length === 5) {
        const lastGuess = guessInfo?.[guessInfo.length-1];
        if(lastGuess?.guess===currentGuess.join('')){
        setGuesses((prevGuesses) => [...prevGuesses, currentGuess.join('') as string]);
        setCurrentGuess([]);
        }
        else{
          message.error('Not in word list');
        }
      return;
    }
    if (event.key === 'Enter' && currentGuess.length < 5) {
      message.error('not enough letter');
      return;
    }
    // clean the cells by pressing backspace
      if (event.key === 'Backspace') {
      setCurrentGuess((prevGuesses) => prevGuesses.slice(0, -1));
      return;
    }
    //only het 5 letter
      if (currentGuess.length === 5) {
      return;
    }
    // to prevent catching enter and other keyword than letter
      if (event.key.length > 1) {
      return;
    }
    event.preventDefault();
    setCurrentGuess((prevGuesses) => [...prevGuesses, event.key]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown as unknown as (event: KeyboardEvent) => void);
    return () => window.removeEventListener('keydown', handleKeyDown as unknown as (event: KeyboardEvent) => void);
  }, [currentGuess,guessInfo]);

  return (
<div>
<div className="header">
    <h1>Wordle</h1>
 </div>
      <div className="board-container">
        <div className="board">
          <Button onClick ={handleGameStatus}>
          {NoOfGuesses ===4 ? 'Easy' : 'Hard'}
          </Button>
          <Grid guesses={guesses} currentGuess={currentGuess} NoOfGuesses={NoOfGuesses}/>
        </div>
      </div>

</div>
  );
};

export default App;
