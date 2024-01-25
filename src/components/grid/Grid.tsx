import { GuessPropsType } from '../../schema/guess';
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import styles from './Grid.module.css';

export const Grid = ({ guesses, currentGuess }: GuessPropsType) => {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []
  return (
    <div className ={styles.boardRow}>
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
