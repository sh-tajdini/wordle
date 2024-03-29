import { GuessPropsType } from '../../schema/guess';
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import styles from './Grid.module.css';


export const Grid = ({ guesses, currentGuess,NoOfGuesses }: GuessPropsType) => {
  const alllRows=NoOfGuesses-1;
  const empties =
    guesses.length < (alllRows) ? Array.from(Array(alllRows - guesses.length)) : []
  return (
    <div className ={styles.boardRow}>
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length <NoOfGuesses && <CurrentRow guess={currentGuess} /> }
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
