'use client';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { auth } from '@/shared/config/firebase';
import {
  clearAuthSessionCookie,
  setAuthSessionCookie,
} from '@/shared/lib/auth-session';

export const AuthSessionSync = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthSessionCookie();
      } else {
        clearAuthSessionCookie();
      }
    });

    return () => unsubscribe();
  }, []);

  return null;
};
