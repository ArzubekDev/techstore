'use client';

import { PictureOutlined, PlusOutlined, TagOutlined } from '@ant-design/icons';
import { type ReactNode } from 'react';

import { CreateProductForm } from '@/features/create-product';

import styles from './styles.module.scss';

export const CreateProduct = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Создание товара</h2>
      <p className={styles.sectionSubtitle}>
        Заполните информацию о товаре, чтобы добавить его в каталог вашего
        магазина
      </p>

      <div className={styles.bannerCard}>
        <div className={styles.bannerContent}>
          <PlusOutlined className={styles.bannerIcon} />
          <div>
            <h3>Добавьте товар в каталог</h3>
            <p>
              После публикации товар появится в каталоге TechStore, а покупатели
              смогут оформить заказ прямо из карточки товара.
            </p>
          </div>
        </div>
      </div>

      <CreateProductForm>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <TagOutlined className={styles.featureIcon} />
            <h4>Категоризация</h4>
            <p>Товар будет отображаться в нужном разделе каталога</p>
          </div>

          <div className={styles.featureItem}>
            <PictureOutlined className={styles.featureIcon} />
            <h4>Карточка товара</h4>
            <p>Фото и описание помогут покупателям принять решение о покупке</p>
          </div>
        </div>
      </CreateProductForm>
    </section>
  );
};
