import styles from './Order.module.css';
import { OrderGoods } from '../OrderGoods/OrderGoods';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { orderRequestAsync } from '../../store/order/orderSlice';

export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(state => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);
  
  return (
    <div className={styles.order}>
        <section className={styles.wrapper}>
          <div className={styles.header} tabIndex="0" role="button">
            <h2 className={styles.title}>Корзина</h2>

            <span className={styles.count}>{totalCount}</span>
          </div>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
                {orderGoods.map((item) => <OrderGoods key={item.id} {...item} />)}
            </ul>

            <div className={styles.total}>
              <p>Итого</p>
              <p>
                <span className={styles.amount}>{totalPrice}</span>
                <span className="currency">&nbsp;₽</span>
              </p>
            </div>

            <button className={styles.submit}>Оформить заказ</button>

            <div className={styles.appeal}>
              <p className={styles.text}>Бесплатная доставка</p>
              <button className={styles.close}>Свернуть</button>
            </div>
          </div>
        </section>
      </div>
  )
};