import styles from './Count.module.css';

export const Count = (props) => {
  return (
    <div className={styles.count}>
      <button className={styles.minus}>-</button>
      <p className={styles.amount}>{props.count}</p>
      <button className={styles.plus}>+</button>
    </div>
  );
};