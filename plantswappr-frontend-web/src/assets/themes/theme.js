import { theme } from '@chakra-ui/core';

export const customTheme = {
  ...theme,
  fonts: {
    heading: `"Pacifico", "Raleway", "Segoe UI"`,
    body: `"Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    xs: '0.5rem',
    sm: '0.65rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3rem',
    '6xl': '4rem'
  }
};
