// Modern Design System for Stevie Johnson Website
export const designSystem = {
  // Modern Color Palette
  colors: {
    // Primary - Sophisticated Browns
    primary: {
      50: '#FAF8F5',
      100: '#F0E8E2',
      200: '#E0D8D6',
      300: '#D5C2A5',
      400: '#A26F25',
      500: '#775646', // Warm taupe
      600: '#693F26',
      700: '#4C2A19', // Rich brown
      800: '#3B2415',
      900: '#1E0C04', // Deep chocolate
      950: '#0F0602',
    },
    // Accent - Golden Browns
    accent: {
      50: '#FDF9F0',
      100: '#F9F0DD',
      200: '#ECD8B1',
      300: '#D5C2A5',
      400: '#C4A574',
      500: '#A26F25', // Golden brown
      600: '#8B5F20',
      700: '#6B491A',
      800: '#533914',
      900: '#3A280E',
    },
    // Neutral - Modern Grays
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #4C2A19 0%, #A26F25 100%)',
      dark: 'linear-gradient(135deg, #0F0602 0%, #1E0C04 50%, #3B2415 100%)',
      glass: 'linear-gradient(135deg, rgba(224,216,214,0.1) 0%, rgba(224,216,214,0.05) 100%)',
      glow: 'radial-gradient(circle at center, rgba(162,111,37,0.15) 0%, transparent 70%)',
    },
  },

  // Modern Typography Scale
  typography: {
    fonts: {
      display: "'Bebas Neue', sans-serif", // For large headings
      heading: "'Space Grotesk', sans-serif", // For section headings
      body: "'Inter', sans-serif", // For body text
      mono: "'JetBrains Mono', monospace", // For code/technical
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
      '9xl': '8rem',    // 128px
    },
  },

  // Modern Spacing System
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem',  // 96px
    '4xl': '8rem',  // 128px
  },

  // Modern Effects
  effects: {
    // Box Shadows
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      glow: '0 0 50px rgba(162, 111, 37, 0.5)',
      neon: '0 0 20px rgba(119, 86, 70, 0.8), 0 0 40px rgba(162, 111, 37, 0.6)',
    },
    // Blur Effects
    blur: {
      sm: 'blur(4px)',
      base: 'blur(8px)',
      lg: 'blur(16px)',
      xl: 'blur(24px)',
    },
    // Transitions
    transitions: {
      fast: 'all 0.15s ease',
      base: 'all 0.3s ease',
      slow: 'all 0.5s ease',
      spring: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // Animations
  animations: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    slideUp: {
      from: { transform: 'translateY(20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideDown: {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    scaleIn: {
      from: { transform: 'scale(0.9)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    glow: {
      '0%, 100%': { boxShadow: '0 0 20px rgba(119, 86, 70, 0.5)' },
      '50%': { boxShadow: '0 0 30px rgba(119, 86, 70, 0.8), 0 0 50px rgba(162, 111, 37, 0.5)' },
    },
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};