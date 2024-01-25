import React, { useEffect, useState } from 'react';
import { Grid } from './components/grid/Grid';
import './App.css';

const App = () => {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleKeyDown= (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && currentGuess.length === 5) {
      setGuesses((prevGuesses) => [...prevGuesses, currentGuess.join('') as string]);
      setCurrentGuess([]);
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
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess]);

  return (
<div>
<div className="header">
    <h1>Wordle</h1>
 </div>
      <div className="board-container">
        <div className="board">
          <Grid guesses={guesses} currentGuess={currentGuess} />
        </div>
      </div>

</div>
  );
};

export default App;
