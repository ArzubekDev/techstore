'use client';

import { PhoneOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

import styles from './styles.module.scss';

export const ProfileContent = () => {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Личный профиль</h2>
          <p className={styles.sectionSubtitle}>
            Управляйте вашими личными данными и аккаунтом
          </p>

          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label>Имя</label>
              <Input
                size="large"
                defaultValue="Алексей"
                placeholder="Введите имя"
              />
            </div>
            <div className={styles.fieldGroup}>
              <label>Фамилия</label>
              <Input
                size="large"
                defaultValue="Иванов"
                placeholder="Введите фамилию"
              />
            </div>
            <div className={styles.fieldGroup}>
              <label>Номер телефона</label>
              <Input
                size="large"
                prefix={<PhoneOutlined />}
                defaultValue="+996555010203"
                disabled={true}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label>Email</label>
              <Input
                size="large"
                defaultValue="user@techstore.kg"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div className={styles.actionRow}>
            <Button type="primary" size="large">
              Сохранить изменения
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};
