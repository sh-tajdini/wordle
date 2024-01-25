import classnames from 'classnames';
import styles from './Cell.module.css';
import { CellPropsType } from '../../schema/cell';

export const Cell = ({ value, status }: CellPropsType) => {
  const classes = classnames(
    styles.cell,
    {
      [styles.cell]: !status,
      [styles.wrongLetter]: status === 0,
      [styles.correctLetter]: status === 2,
      [styles.presentLetter]: status === 1,
    }
  )

  return (
      <div className={classes}>{value}</div>
  )
}
