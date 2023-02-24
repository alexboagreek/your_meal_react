import { addProduct, removeProduct } from '../../store/order/orderSlice';
import styles from './Count.module.css';
import { useDispatch } from 'react-redux';

export const Count = ({count, id}) => {
  const dispatch = useDispatch();
  
  const addCount = () => {
    dispatch(addProduct({ id }));
  };

  const removeCount = () => {
    dispatch(removeProduct({ id }));
  };

  return (
     /** disabled= {count === 1} */
    <div className={styles.count}>
      <button className={styles.minus} onClick={removeCount} >-</button> 
      <p className={styles.amount}>{count}</p>
      <button className={styles.plus} onClick={addCount}>+</button>
    </div>
  );
};