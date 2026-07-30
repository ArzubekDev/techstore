import { AUTH_SESSION_COOKIE } from '@/shared/consts/auth';

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export const setAuthSessionCookie = () => {
  document.cookie = `${AUTH_SESSION_COOKIE}=1; path=/; max-age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`;
};

export const clearAuthSessionCookie = () => {
  document.cookie = `${AUTH_SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
};
