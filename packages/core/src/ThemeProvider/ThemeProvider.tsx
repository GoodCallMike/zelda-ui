import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  /** React children to wrap with theme context */
  children: ReactNode;
  /** Initial theme setting. Defaults to 'system' which detects OS preference */
  defaultTheme?: Theme;
  /** localStorage key for persisting theme choice. Defaults to 'jetstream-theme' */
  storageKey?: string;
}

/**
 * Theme management system with light/dark mode support.
 * 
 * Setup: `<ThemeProvider defaultTheme="system"><App /></ThemeProvider>`
 * 
 * Usage: `const { theme, setTheme } = useTheme();`
 * 
 * Dark mode: `className="bg-white dark:bg-gray-900"`
 */
export const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'jetstream-theme',
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load theme from localStorage
    const stored = localStorage.getItem(storageKey) as Theme;
    if (stored) {
      setTheme(stored);
    }
  }, [storageKey]);

  useEffect(() => {
    const root = document.documentElement;
    
    const updateTheme = () => {
      let resolved: 'light' | 'dark' = 'light';
      
      if (theme === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        resolved = theme;
      }
      
      setResolvedTheme(resolved);
      root.setAttribute('data-theme', resolved);
    };

    updateTheme();

    // Listen for system theme changes
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateTheme);
      return () => mediaQuery.removeEventListener('change', updateTheme);
    }
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access and control theme state.
 * 
 * @returns Object containing:
 * - theme: Current theme setting ('light' | 'dark' | 'system')
 * - setTheme: Function to change theme
 * - resolvedTheme: Actual resolved theme ('light' | 'dark') with system preference resolved
 * 
 * @example
 * const { theme, setTheme, resolvedTheme } = useTheme();
 * 
 * // Toggle theme
 * <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *   Current: {resolvedTheme}
 * </button>
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};