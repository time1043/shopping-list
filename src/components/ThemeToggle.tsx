import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';

// https://primereact.org/theming/#switchthemes
// https://primereact.org/button/#icononly
export default function ThemeToggle() {
  const DARK_THEME = 'lara-dark-cyan';
  const LIGHT_THEME = 'lara-light-cyan';

  const { changeTheme } = useContext(PrimeReactContext);
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    const currentTheme = isDark ? DARK_THEME : LIGHT_THEME;
    const nextTheme = isDark ? LIGHT_THEME : DARK_THEME;

    // "theme-link" is the id of the <link> tag in index.html
    changeTheme?.(currentTheme, nextTheme, 'theme-link', () => {
      setIsDark(!isDark);
    });
  }

  return (
    <Button
      icon={isDark ? 'pi pi-moon' : 'pi pi-sun'}
      text
      severity="secondary"
      onClick={toggleTheme}
    />
  );
}
