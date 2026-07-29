import styles from './styles.module.scss';

export const Notifications = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Уведомления</h2>
      <p className={styles.sectionSubtitle}>
        История ваших системных и акционных оповещений
      </p>

      <div className={styles.notificationsList}>
        <div className={`${styles.notificationItem} ${styles.unread}`}>
          <div className={styles.notifHeader}>
            <span className={styles.notifTitle}>
              Добро пожаловать в TechStore!
            </span>
            <span className={styles.notifDate}>Сегодня, 12:45</span>
          </div>
          <p className={styles.notifBody}>
            Вы успешно подтвердили номер телефона и авторизовались на платформе.
          </p>
        </div>

        <div className={`${styles.notificationItem} ${styles.unread}`}>
          <div className={styles.notifHeader}>
            <span className={styles.notifTitle}>Скидки на смартфоны 🔥</span>
            <span className={styles.notifDate}>Вчера, 18:20</span>
          </div>
          <p className={styles.notifBody}>
            Успейте купить техники по спецценам до конца недели.
          </p>
        </div>
      </div>
    </section>
  );
};
