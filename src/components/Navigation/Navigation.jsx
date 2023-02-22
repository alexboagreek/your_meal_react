import styles from './Navigation.module.css';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <nav className={styles.navigation}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {category.map((item, index) => 
              <li className={styles.item}>
                <button 
                  className={classNames(
                    styles.button, 
                    activeCategory === index ? styles.button_active : '')}
                    style={{ backgroundImage: `url(${item.image})`}}
                    onClick={() => {
                      dispatch(changeCategory({indexCategory: index}))
                    }}
                    >
                    {item.rus}
                </button>
              </li>
          )}
        </ul>
      </Container>
    </nav>
  );
};
