import { IconCheckCircle, IconLevel, IconTV } from '@/shared/ui/icons';
import { Flex } from '@/shared/ui/layout';

import styles from './styles.module.scss';

export const BannerContent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.glowBg} aria-hidden="true" />

      <div className={styles.hero}>
        <Flex direction="column" className={styles.heroContent}>
          <h1 className={styles.title}>
            Инновации и стиль <br />
            <span className={styles.gradientText}>в мире технологий</span>
          </h1>

          <p className={styles.description}>
            Премиальный маркетплейс электроники. Покупайте оригинальные
            смартфоны, ноутбуки и аксессуары с гарантией или откройте свой
            собственный технологичный онлайн-бизнес в несколько кликов.
          </p>

          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <IconLevel />
              </div>
              <span className={styles.benefitText}>Высокое качество</span>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <IconTV />
              </div>
              <span className={styles.benefitText}>Любая техника</span>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <IconCheckCircle />
              </div>
              <span className={styles.benefitText}>1 год гарантии</span>
            </div>
          </div>
        </Flex>
      </div>
    </section>
  );
};
