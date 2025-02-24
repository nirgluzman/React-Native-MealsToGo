export const colors = {
  brand: {
    primary: '#2182BD',
    secondary: '#5282BD',
    muted: '#C6DAF7',
  },
  ui: {
    primary: '#262626',
    secondary: '#757575',
    tertiary: '#F1F1F1',
    quaternary: '#FFFFFF',
    disabled: '#DEDEDE',
    error: '#D0421B',
    success: '#138000',
    active: 'tomato',
    inactive: 'gray',
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#F1F1F1',
    tertiary: 'lavender',
    quaternary: 'lightblue',
  },
  text: {
    primary: '#262626',
    secondary: '#757575',
    disabled: '#9C9C9C',
    inverse: '#FFFFFF',
    error: '#D0421B',
    success: '#138000',
  },
} as const;

export type Colors = typeof colors;
