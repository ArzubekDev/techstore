'use client';

import { ShopOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

import styles from './styles.module.scss';

const { TextArea } = Input;

export const CreateShop = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Создание магазина</h2>
      <p className={styles.sectionSubtitle}>
        Заполните информацию о вашем магазине, чтобы начать продавать на
        TechStore
      </p>

      <div className={styles.bannerCard}>
        <div className={styles.bannerContent}>
          <ShopOutlined className={styles.bannerIcon} />
          <div>
            <h3>Откройте свой технологичный бизнес</h3>
            <p>
              После создания магазина вы сможете добавлять товары, управлять
              заказами и отслеживать продажи в личном кабинете.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.fieldGroup}>
          <label htmlFor="shop-name">Название магазина</label>
          <Input
            id="shop-name"
            size="large"
            placeholder="Например, TechGadgets KG"
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="shop-city">Город</label>
          <Input id="shop-city" size="large" placeholder="Бишкек" />
        </div>

        <div className={`${styles.fieldGroup} ${styles.fieldFullWidth}`}>
          <label htmlFor="shop-description">Описание магазина</label>
          <TextArea
            id="shop-description"
            rows={4}
            placeholder="Расскажите покупателям, чем ваш магазин отличается от других"
          />
        </div>

        <div className={`${styles.fieldGroup} ${styles.fieldFullWidth}`}>
          <label htmlFor="shop-address">Адрес</label>
          <Input
            id="shop-address"
            size="large"
            placeholder="Улица, дом, офис или пункт выдачи"
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="shop-phone">Контактный телефон</label>
          <Input id="shop-phone" size="large" placeholder="+996555010203" />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="shop-email">Email для связи</label>
          <Input id="shop-email" size="large" placeholder="shop@example.com" />
        </div>
      </div>

      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <ShopOutlined className={styles.featureIcon} />
          <h4>Каталог товаров</h4>
          <p>Добавляйте смартфоны, ноутбуки и аксессуары в один клик</p>
        </div>

        <div className={styles.featureItem}>
          <ShopOutlined className={styles.featureIcon} />
          <h4>Управление заказами</h4>
          <p>Отслеживайте статусы и обрабатывайте заявки покупателей</p>
        </div>
      </div>

      <div className={styles.actionRow}>
        <Button size="large">Отмена</Button>
        <Button type="primary" size="large" className={styles.createShopBtn}>
          Создать магазин
        </Button>
      </div>
    </section>
  );
};
