// Modern Design System for Stevie Johnson Website
export const designSystem = {
  // Modern Color Palette
  colors: {
    // Primary - Deep Space Blue with Neon Accents
    primary: {
      50: '#e6f1ff',
      100: '#b3d4ff',
      200: '#80b8ff',
      300: '#4d9bff',
      400: '#1a7eff',
      500: '#0066ff', // Main brand color
      600: '#0052cc',
      700: '#003d99',
      800: '#002966',
      900: '#001433',
      950: '#000a1a',
    },
    // Accent - Electric Cyan
    accent: {
      50: '#e6fffa',
      100: '#b3ffef',
      200: '#80ffe5',
      300: '#4dffda',
      400: '#1affd0',
      500: '#00ffc6', // Neon accent
      600: '#00cc9e',
      700: '#009977',
      800: '#00664f',
      900: '#003328',
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
      primary: 'linear-gradient(135deg, #0066ff 0%, #00ffc6 100%)',
      dark: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f3460 100%)',
      glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      glow: 'radial-gradient(circle at center, rgba(0,255,198,0.15) 0%, transparent 70%)',
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
      glow: '0 0 50px rgba(0, 255, 198, 0.5)',
      neon: '0 0 20px rgba(0, 102, 255, 0.8), 0 0 40px rgba(0, 102, 255, 0.6)',
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
      '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.5)' },
      '50%': { boxShadow: '0 0 30px rgba(0, 102, 255, 0.8), 0 0 50px rgba(0, 255, 198, 0.5)' },
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