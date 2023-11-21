import { LOCAL_LANG_KEY, LOCAL_THEME_KEY } from '../constants';

export const getLocalTheme = (): string => {
  let localStorageTheme = localStorage.getItem(LOCAL_THEME_KEY);

  if (!localStorageTheme) {
    localStorageTheme = 'light';
    localStorage.setItem(LOCAL_THEME_KEY, localStorageTheme);
  }

  return localStorageTheme;
};

export const getLocalLanguage = (): string => {
  let localStorageLanguage = localStorage.getItem(LOCAL_LANG_KEY);

  if (!localStorageLanguage) {
    localStorageLanguage = 'en';
  }

  return localStorageLanguage;
};