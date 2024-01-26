import { Cell } from './Cell';
import styles from './EmptyRow.module.css'
import { CompletedGuessPropsType } from '../../schema/guess';
import { useAppSelector } from '../../hooks';


export const CompletedRow = ({ guess }: CompletedGuessPropsType) => {

  const { guessInfo } = useAppSelector((state) => state.game);

  const score = guessInfo?.find((item) => item.guess === guess)?.score;
  return (
    <div className ={styles.row}>
      {guess?.split('').map((letter, i) => (
        <Cell key={i} value={letter} status={score?.[i]}/>
      ))}
    </div>
  )
}

