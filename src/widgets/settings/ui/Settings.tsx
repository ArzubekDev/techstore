import { Switch } from 'antd';

import styles from './styles.module.scss';

export const Settings = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Настройки</h2>
      <p className={styles.sectionSubtitle}>
        Параметры безопасности и уведомлений
      </p>

      <div className={styles.settingsGroup}>
        <div className={styles.settingRow}>
          <div>
            <div className={styles.settingName}>SMS-уведомления</div>
            <div className={styles.settingDesc}>
              Получать сообщения о статусе заказов на телефон
            </div>
          </div>
          <Switch defaultChecked={true} />
        </div>

        <div className={styles.settingRow}>
          <div>
            <div className={styles.settingName}>
              Двухфакторная аутентификация
            </div>
            <div className={styles.settingDesc}>
              Дополнительная защита вашего аккаунта
            </div>
          </div>
          <Switch defaultChecked={true} />
        </div>
      </div>
    </section>
  );
};
