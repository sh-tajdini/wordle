import { CurrentGuessPropsType } from '../../schema/guess'
import { Cell } from './Cell'
import styles from './EmptyRow.module.css'

export const CurrentRow = ({ guess }: CurrentGuessPropsType) => {
  const emptyCells = Array.from(Array(5 - guess.length))
  return (
    <div className={styles.row}>
      {guess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
