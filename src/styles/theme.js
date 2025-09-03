const theme = {
  colors: {
    primary: {
      50: '#FFFDF7',
      100: '#FEF9E6',
      200: '#FCF0C0',
      300: '#F9E799',
      400: '#F5DD73',
      500: '#D4AF37', // Main gold
      600: '#B8941F',
      700: '#9C7A15',
      800: '#80600C',
      900: '#644606'
    },
    secondary: {
      50: '#F8F8F8',
      100: '#EFEFEF',
      200: '#DCDCDC',
      300: '#BDBDBD',
      400: '#989898',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#2C2C2C', // Main dark
      900: '#1A1A1A'
    },
    accent: {
      50: '#FFF5F5',
      100: '#FFE8E8',
      200: '#FFC4C4',
      300: '#FF9F9F',
      400: '#FF7B7B',
      500: '#FF5757',
      600: '#E04545',
      700: '#C13333',
      800: '#A12222',
      900: '#821111'
    },
    background: {
      primary: '#FAF9F6',
      secondary: '#FFFFFF',
      tertiary: '#F5F4F1'
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#757575',
      light: '#989898',
      inverse: '#FFFFFF'
    },
    border: {
      light: '#E5E5E5',
      medium: '#BDBDBD',
      dark: '#757575'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%'
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.15)'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  }
};

export default theme;