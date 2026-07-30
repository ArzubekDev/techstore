'use client';

import { CloseOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { type TProductDTO } from '@/entities/products/model/types';
import { ProductDetails } from '@/widgets/product-details';

import styles from './styles.module.scss';

type TProps = {
  product: TProductDTO;
};

export const ProductModal = ({ product }: TProps) => {
  const router = useRouter();

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div
      className={styles.overlay}
      onClick={handleClose}
      role="presentation"
    >
      <div
        className={styles.dialog}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          <CloseOutlined />
        </button>

        <ProductDetails product={product} variant="modal" />
      </div>
    </div>
  );
};
