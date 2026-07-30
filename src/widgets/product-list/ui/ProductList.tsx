import { ProductCard } from '@/entities/products/ui/ProductCard/ProductCard';
import { type TProductDTO } from '@/entities/products/model/types';

import styles from './styles.module.scss';

type TProps = {
  products: TProductDTO[];
};

const ShoppingIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 6h15l-1.5 9h-12L6 6Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M6 6 5 3H2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="10" cy="19" r="1.5" fill="currentColor" />
    <circle cx="17" cy="19" r="1.5" fill="currentColor" />
  </svg>
);

export const ProductList = ({ products }: TProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Каталог TechStore</p>
          <h2 className={styles.title}>Популярные товары</h2>
          <p className={styles.subtitle}>
            Свежие поступления смартфонов, ноутбуков и аксессуаров от
            продавцов маркетплейса
          </p>
        </div>

        <div className={styles.stats}>
          <ShoppingIcon />
          <span>{products.length} товаров</span>
        </div>
      </div>

      {products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <ShoppingIcon />
          </div>
          <h3 className={styles.emptyTitle}>Пока нет товаров</h3>
          <p className={styles.emptyText}>
            Станьте первым продавцом и добавьте свой товар в каталог TechStore
          </p>
        </div>
      )}
    </section>
  );
};
