import Link from 'next/link';

import { formatPrice } from '@/entities/products/lib/format-price';
import { type TProductDTO } from '@/entities/products/model/types';
import { ROUTE } from '@/shared/consts/routes';

import styles from './styles.module.scss';

type TProps = {
  product: TProductDTO;
};

export const ProductCard = ({ product }: TProps) => {
  return (
    <Link
      href={ROUTE.catalog.product(String(product._id))}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.image_url}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
        <span className={styles.category}>{product.category}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>

        {product.description && (
          <p className={styles.description}>{product.description}</p>
        )}

        <div className={styles.footer}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <span className={styles.action}>Подробнее</span>
        </div>
      </div>
    </Link>
  );
};
