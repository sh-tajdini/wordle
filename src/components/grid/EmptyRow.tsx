import { Cell } from './Cell'
import styles from './EmptyRow.module.css'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(5))

  return (
    <div className ={styles.row}>
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
