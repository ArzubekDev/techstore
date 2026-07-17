// src/features/auth-by-phone/ui/AuthButton.tsx
'use client';

import { useState } from 'react';
import { Button, Modal, Input, message } from 'antd';
import styles from './styles.module.scss';

export const AuthButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!phone || phone.trim().length < 6) {
      message.error('Введите корректный номер телефона');
      return;
    }
    if (code.length !== 6) {
      message.error('Код подтверждения должен состоять из 6 цифр');
      return;
    }

    setIsLoading(true);

    // Имитируем запрос к API (KISS / Имитация задержки сети)
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
      message.success('Успешный вход в систему!');
      // Сбрасываем форму
      setPhone('');
      setCode('');
    }, 1000);
  };

  return (
    <>
      <Button
        type="primary"
        size="large"
        className={styles.authButton}
        onClick={() => setIsOpen(true)}
      >
        Войти в систему
      </Button>

      <Modal
        title={
          <div className={styles.modalTitle}>
            <span>Вход в</span>
            <span className={styles.titleHighlight}>TechStore</span>
          </div>
        }
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={handleLogin}
        confirmLoading={isLoading}
        okText="Подтвердить"
        cancelText="Отмена"
        // Специальные пропсы Ant Design для стилизации внутреннего содержимого
        className={styles.customModal}
        centered={true}
      >
        <div className={styles.modalBody}>
          <p className={styles.modalDescription}>
            Введите номер телефона и любой 6-значный код для демонстрационного
            входа.
          </p>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Номер телефона</label>
            <Input
              placeholder="+996 (555) 01-02-03"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.inputField}
              size="large"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Код подтверждения</label>
            <Input
              placeholder="0 0 0 0 0 0"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={styles.inputField}
              size="large"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
