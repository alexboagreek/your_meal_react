import styles from './Navigation.module.css';
import { Container } from '../Container/Container';
import classNames from 'classnames';

export const Navigation = () => {

  return (
    <nav className={styles.navigation}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_burger, styles.button_active)}>Бургеры</button>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_snack)}>Закуски</button>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_hot_dog)}>Хот-доги</button>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_combo)}>Комбо</button>
          </li>
          <li className={styles.itemName}>
            <button className={classNames(styles.button, styles.button_shawarma)}>Шаурма</button>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_pizza)}>Пицца</button>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_wok)}>Вок</button>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_dessert)}>Десерты</button>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.button, styles.button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
