import { IconBlock } from '@/shared/ui/icons';
import styles from './styles.module.scss';
import { AuthButton } from '@/features/auth-by-phone-number/ui/AuthButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <IconBlock width={32} height={32} color="red" />
        <span className={styles.logoText}>
          Tech<span className={styles.logoHighlight}>Store</span>
        </span>
      </div>
      <div className={styles.actions}>
        <AuthButton />
      </div>
    </header>
  );
};
