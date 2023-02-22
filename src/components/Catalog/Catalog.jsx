import { Order } from "../Order/Order";
import { Container } from "../Container/Container";
import styles from './Catalog.module.css';
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container>
        <div className={styles.container}>
          <Order />

          <div className={styles.wrapper}>
            <h2 className={styles.title}>Бургеры</h2>

            <div className={styles.wrap_list}>
              <ul className={styles.list}>
                {goodsList.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <CatalogProduct title={item.title}/>
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