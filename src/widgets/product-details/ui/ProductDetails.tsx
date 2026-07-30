import { formatPrice } from '@/entities/products/lib/format-price';
import { type TProductDTO } from '@/entities/products/model/types';

import styles from './styles.module.scss';

type TProps = {
  product: TProductDTO;
  variant?: 'page' | 'modal';
};

export const ProductDetails = ({ product, variant = 'page' }: TProps) => {
  return (
    <article
      className={`${styles.details} ${variant === 'modal' ? styles.modal : styles.page}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.image_url}
          alt={product.title}
          className={styles.image}
        />
        <span className={styles.category}>{product.category}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>TechStore</p>
        <h1
          id={variant === 'modal' ? 'product-modal-title' : undefined}
          className={styles.title}
        >
          {product.title}
        </h1>

        {product.description && (
          <p className={styles.description}>{product.description}</p>
        )}

        <div className={styles.meta}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.createdAt && (
            <span className={styles.date}>
              Добавлено: {new Date(product.createdAt).toLocaleDateString('ru-RU')}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
