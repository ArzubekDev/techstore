'use client';

import { Button } from 'antd';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { AuthButton } from '@/features/auth-by-phone-number/ui/AuthButton';

import { auth } from '@/shared/config/firebase';
import { IconBlock } from '@/shared/ui/icons';

import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Ошибка при выходе из аккаунта:', error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <IconBlock width={32} height={32} color="red" />
        <span className={styles.logoText}>
          Tech<span className={styles.logoHighlight}>Store</span>
        </span>
      </div>
      <div className={styles.actions}>
        {isLoading ? (
          <span>Загрузка...</span>
        ) : user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              className={styles.userPhone}
              onClick={() => route.push('/profile')}
            >
              {user.phoneNumber || 'Пользователь'}
            </span>

            <Button type="text" danger={true} onClick={handleLogout}>
              Выйти
            </Button>
          </div>
        ) : (
          <AuthButton />
        )}
      </div>
    </header>
  );
};
