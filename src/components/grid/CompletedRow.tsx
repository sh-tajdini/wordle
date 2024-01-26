import { Cell } from './Cell';
import styles from './EmptyRow.module.css'
import { CompletedGuessPropsType } from '../../schema/guess';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { doMakeGuess } from '../../reducers/Game/gameReducer';
import { useAppSelector } from '../../hooks';


export const CompletedRow = ({ guess }: CompletedGuessPropsType) => {
  const dispatch = useDispatch();
  const { guessInfo } = useAppSelector((state) => state.game);

  useEffect(() => {
    dispatch(doMakeGuess({ guess: guess }));
  }, []);

  const score = guessInfo?.find((item) => item.guess === guess)?.score;
  return (
    <div className ={styles.row}>
      {guess?.split('').map((letter, i) => (
        <Cell key={i} value={letter} status={score?.[i]}/>
      ))}
    </div>
  )
}

