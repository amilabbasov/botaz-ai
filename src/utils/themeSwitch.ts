import { themeConfig } from '~/theme.config';
import type { UserTheme } from '~/types/user-theme';

const EC_THEME_LIGHT = themeConfig.expressiveCodeThemes?.light as string;
const EC_THEME_DARK = (themeConfig.expressiveCodeThemes?.dark || EC_THEME_LIGHT) as string;

/**
 * Applies the dark theme to the <html> element.
 */
const applyTheme = (_theme?: UserTheme) => {
  const root = document.documentElement;
  root.classList.add('dark');
  if (EC_THEME_DARK !== undefined) {
    root.setAttribute('data-theme', EC_THEME_DARK);
  }
};

/**
 * Inline script run synchronously in <head> before first paint.
 */
export const THEME_INIT_SCRIPT = `(function(){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','${EC_THEME_DARK}')})();`;

export const getUserTheme = (): UserTheme => {
  applyTheme('dark');
  return 'dark';
};

export const setUserTheme = (_theme: UserTheme) => {
  applyTheme('dark');
};
