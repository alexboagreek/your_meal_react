import { Order } from "../Order/Order";
import { Container } from "../Container/Container";
import styles from './Catalog.module.css';
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { productRequestAsync } from '../../store/product/productSlice.js';


export const Catalog = () => {
  const { products } = useSelector(state => state.product);
  const dispatch =useDispatch();
  const { category, activeCategory } = useSelector(state => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }

  }, [category, activeCategory]);

  return (
    <section className={styles.catalog}>
      <Container>
        <div className={styles.container}>
          <Order />

          <div className={styles.wrapper}>
            <h2 className={styles.title}>{category[activeCategory]?.rus}</h2>

            <div className={styles.wrap_list}>
              <ul className={styles.list}>
                {products.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <CatalogProduct item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};