import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useEffect,
} from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';

interface ContextData {
  toogleTheme(): void;
  selectedTheme: string;
}

const ThemeContext = createContext<ContextData>({} as ContextData);

const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('@editor/theme') || 'light',
  );

  const toogleTheme = useCallback(() => {
    setTheme(state => (state === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => localStorage.setItem('@editor/theme', theme), [theme]);

  return (
    <ThemeContext.Provider value={{ selectedTheme: theme, toogleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>

      <GlobalStyles />
    </ThemeContext.Provider>
  );
};

export function useTheme(): ContextData {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}

export default Theme;
