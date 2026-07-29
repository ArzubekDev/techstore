'use client';

import { useState } from 'react';
import { auth } from '@/shared/config/firebase';
import { Button, Input, message, Modal } from 'antd';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  type ConfirmationResult,
} from 'firebase/auth';

import styles from './styles.module.scss';

export const AuthButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [isLoading, setIsLoading] = useState(false);

  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const resetState = () => {
    setIsOpen(false);
    setStep('phone');
    setPhone('');
    setCode('');
    setConfirmationResult(null);
  };

  const handleSendCode = async () => {
    if (!phone || phone.trim().length < 9) {
      message.error(
        'Введите корректный номер телефона (например, +996555010203)',
      );
      return;
    }

    setIsLoading(true);

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          'recaptcha-container',
          {
            size: 'invisible',
          },
        );
      }

      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier,
      );

      setConfirmationResult(confirmation);
      setStep('code');
      message.success('Код подтверждения отправлен!');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        message.error(
          error.message || 'Ошибка при отправке SMS. Проверьте формат номера.',
        );
      }

      // Сброс рекапчи в случае ошибки
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = undefined;
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Шаг 2: Подтвердить код из SMS
  const handleVerifyCode = async () => {
    if (code.length !== 6) {
      message.error('Код подтверждения должен состоять из 6 цифр');
      return;
    }

    if (!confirmationResult) {
      message.error('Сессия истекла. Запросите код заново.');
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await confirmationResult.confirm(code);
      message.success(
        `Успешный вход! С возвращением, ${userCredential.user.phoneNumber}`,
      );
      resetState();
    } catch (error) {
      console.error(error);
      message.error('Неверный код подтверждения');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div id="recaptcha-container"></div>
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
        onCancel={resetState}
        onOk={step === 'phone' ? handleSendCode : handleVerifyCode}
        confirmLoading={isLoading}
        okText={step === 'phone' ? 'Отправить код' : 'Подтвердить'}
        cancelText="Отмена"
        className={styles.customModal}
        centered={true}
      >
        <div className={styles.modalBody}>
          {step === 'phone' ? (
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                Номер телефона (с кодом страны)
              </label>
              <Input
                placeholder="+996555010203"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.inputField}
                size="large"
              />
            </div>
          ) : (
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Код из SMS</label>
              <Input
                placeholder="0 0 0 0 0 0"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={styles.inputField}
                size="large"
              />
              <Button
                type="link"
                onClick={() => setStep('phone')}
                style={{ paddingLeft: 0, marginTop: 8 }}
              >
                Изменить номер телефона
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
