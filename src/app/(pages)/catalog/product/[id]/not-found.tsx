import Link from 'next/link';

import { ROUTE } from '@/shared/consts/routes';

import styles from './styles.module.scss';

export default function ProductNotFound() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Товар не найден</h1>
      <p className={styles.text}>
        Возможно, он был удалён или ссылка указана неверно.
      </p>
      <Link href={ROUTE.home} className={styles.link}>
        Вернуться на главную
      </Link>
    </section>
  );
}
