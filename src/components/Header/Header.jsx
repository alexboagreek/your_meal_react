import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <img class={styles.logo} src={logo} alt="Логотип YourMeal" />

          <div class={styles.wrapper}>
            <h1 class={styles.title}>
              <span>Только самые</span>
              <span class={styles.red}>сочные бургеры!</span>
            </h1>

            <p class={styles.appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </Container>
    </header>
);