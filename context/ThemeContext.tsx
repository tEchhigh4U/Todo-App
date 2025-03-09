import { createContext, useState, ReactNode } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { Colors } from '@/constants/Colors'; 

interface ThemeContextType {
  colorScheme: ColorSchemeName;
  setColorScheme: (scheme: ColorSchemeName) => void;
  theme: typeof Colors.light | typeof Colors.dark;
}

export const ThemeContext = createContext<ThemeContextType>({
  colorScheme: 'light',
  setColorScheme: () => {},
  theme: Colors.light
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme() || 'light'
  );

  const theme = colorScheme === 'dark'
    ? Colors.dark
    : Colors.light;

  return (
    <ThemeContext.Provider value={{
      colorScheme, 
      setColorScheme, 
      theme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};