'use client';

import { SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

import { PROFILE_TABS } from '../consts/consts';

import styles from './styles.module.scss';

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <UserOutlined />
        </div>
        <div className={styles.userDetails}>
          <h3 className={styles.userName}>Пользователь</h3>
          <span className={styles.userPhone}>+996 (555) 01-02-03</span>
          <Tag color="green" className={styles.statusTag}>
            <SafetyCertificateOutlined /> Подтвержден
          </Tag>
        </div>
      </div>

      <nav className={styles.navMenu}>
        {PROFILE_TABS.map((tab) => (
          <button
            key={tab.path}
            onClick={() => router.push(tab.path)}
            className={`${styles.navItem} ${isActive(tab.path) ? styles.active : ''}`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
