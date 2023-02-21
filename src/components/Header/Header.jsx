import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => (
    <header className={styles.header}>
      <Container class={styles.header__container}>
        <img class={styles.header__logo} src={logo} alt="Логотип YourMeal" />

        <div class={styles.header__wrapper}>
          <h1 class={styles.header__title}>
            <span>Только самые</span>
            <span class={styles.header__red}>сочные бургеры!</span>
          </h1>

          <p class={styles.header__appeal}>Бесплатная доставка от 599₽</p>
        </div>
      </Container>
    </header>
       
    
  
);