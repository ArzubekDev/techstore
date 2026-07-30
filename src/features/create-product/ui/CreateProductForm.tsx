'use client';

import { ShoppingOutlined } from '@ant-design/icons';
import { Button, Image, Input, InputNumber } from 'antd';
import { type ReactNode } from 'react';
import { Controller } from 'react-hook-form';

import { useCreateProduct } from '../model/useCreateProduct';

import styles from './styles.module.scss';

const { TextArea } = Input;

const isValidImageUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

type TProps = {
  children?: ReactNode;
};

export const CreateProductForm = ({ children }: TProps) => {
  const { form, onSubmit, onCancel, isSubmitting } = useCreateProduct();
  const {
    control,
    formState: { errors },
    watch,
  } = form;

  const imageUrl = watch('image_url');

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.formGrid}>
        <div className={styles.fieldGroup}>
          <label htmlFor="product-title">Название товара</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="product-title"
                size="large"
                placeholder="Например, iPhone 15 Pro 256GB"
                status={errors.title ? 'error' : undefined}
              />
            )}
          />
          {errors.title?.message && (
            <span className={styles.fieldError}>{errors.title.message}</span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="product-category">Категория</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="product-category"
                size="large"
                placeholder="Смартфоны, ноутбуки, аксессуары"
                status={errors.category ? 'error' : undefined}
              />
            )}
          />
          {errors.category?.message && (
            <span className={styles.fieldError}>{errors.category.message}</span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="product-price">Цена</label>
          <Controller
            name="price"
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
              <InputNumber
                {...field}
                id="product-price"
                size="large"
                min={1}
                max={99_999_999}
                value={value ?? null}
                onChange={(nextValue) => onChange(nextValue ?? undefined)}
                placeholder="129990"
                suffix="сом"
                style={{ width: '100%' }}
                status={errors.price ? 'error' : undefined}
              />
            )}
          />
          {errors.price?.message && (
            <span className={styles.fieldError}>{errors.price.message}</span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="product-image">URL изображения</label>
          <Controller
            name="image_url"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="product-image"
                size="large"
                placeholder="https://example.com/product.jpg"
                status={errors.image_url ? 'error' : undefined}
              />
            )}
          />
          {errors.image_url?.message && (
            <span className={styles.fieldError}>
              {errors.image_url.message}
            </span>
          )}
          {imageUrl && isValidImageUrl(imageUrl) && (
            <Image
              src={imageUrl}
              alt="Превью товара"
              className={styles.imagePreview}
              fallback="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect fill='%23f5f5f5' width='120' height='120'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23bfbfbf' font-size='12'%3EНет фото%3C/text%3E%3C/svg%3E"
            />
          )}
        </div>

        <div className={`${styles.fieldGroup} ${styles.fieldFullWidth}`}>
          <label htmlFor="product-description">Описание товара</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                id="product-description"
                rows={4}
                placeholder="Укажите характеристики, комплектацию и преимущества товара"
                status={errors.description ? 'error' : undefined}
              />
            )}
          />
          {errors.description?.message && (
            <span className={styles.fieldError}>
              {errors.description.message}
            </span>
          )}
        </div>
      </div>

      {children}

      <div className={styles.actionRow}>
        <Button size="large" onClick={onCancel} disabled={isSubmitting}>
          Отмена
        </Button>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          loading={isSubmitting}
          className={styles.createProductBtn}
        >
          <ShoppingOutlined />
          Создать товар
        </Button>
      </div>
    </form>
  );
};
