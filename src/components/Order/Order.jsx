import styles from './Order.module.css';
import { OrderGoods } from '../OrderGoods/OrderGoods';

const orderList = ['Супер сырный', 'Картошка Фри', 'Жгучий хот-дог'];

export const Order = () => {
  return (
    <div className={styles.order}>
        <section className={styles.wrapper}>
          <div className={styles.header} tabIndex="0" role="button">
            <h2 className={styles.title}>Корзина</h2>

            <span className={styles.count}>4</span>
          </div>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
                {orderList.map((item, index) => <OrderGoods key={index} index={index} item={item} />)}
            </ul>

            <div className={styles.total}>
              <p>Итого</p>
              <p>
                <span className={styles.amount}>1279</span>
                <span className="currency">₽</span>
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