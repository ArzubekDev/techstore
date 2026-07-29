'use client';
import {
  BellOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

import { Card } from 'antd';

import styles from './styles.module.scss';

export const CreateShop = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Продажи на TechStore</h2>
      <p className={styles.sectionSubtitle}>
        Откройте свой магазин и продавайте технику по всей стране
      </p>

      <Card className={styles.bannerCard}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerIcon}>
            <ShopOutlined />
          </div>
        </div>
      </Card>

      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <ShoppingOutlined className={styles.featureIcon} />
          <h4>Управление товарами</h4>
          <p>Удобная загрузка каталога и остатков</p>
        </div>
        <div className={styles.featureItem}>
          <BellOutlined className={styles.featureIcon} />
          <h4>Уведомления о заказах</h4>
          <p>Мгновенные сообщения о новых покупках</p>
        </div>
      </div>
    </section>
  );
};
