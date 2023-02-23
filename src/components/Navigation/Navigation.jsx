import styles from './Navigation.module.css';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';
import { useEffect } from 'react';
import { categoryRequestAsync } from '../../store/category/categorySlice';
import { API_URI } from '../../const';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync());
    
  }, []);

  return (
    <nav className={styles.navigation}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {category.map((item, index) => 
              <li className={styles.item} key={item.title}>
                <button 
                  className={classNames(
                    styles.button, 
                    activeCategory === index ? styles.button_active : '')}
                    style={{ backgroundImage: `url(${API_URI}/${item.image})`}}
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
