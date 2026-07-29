import { Sidebar } from '@/widgets/sidebar';

import styles from './styles.module.scss';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default ProfileLayout;
