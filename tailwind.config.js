module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Keep existing Shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#FAF8F5',
          100: '#F0E8E2',
          200: '#E0D8D6',
          300: '#D5C2A5',
          400: '#A26F25',
          500: '#775646',
          600: '#693F26',
          700: '#4C2A19',
          800: '#3B2415',
          900: '#1E0C04',
          950: '#0F0602',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: '#FDF9F0',
          100: '#F9F0DD',
          200: '#ECD8B1',
          300: '#D5C2A5',
          400: '#C4A574',
          500: '#A26F25',
          600: '#8B5F20',
          700: '#6B491A',
          800: '#533914',
          900: '#3A280E',
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        fleur: ['"Fleur De Leah"', 'cursive'],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // ⭐ CINEMATIC ANIMATIONS
        "cinematic-reveal": {
          '0%': { 
            opacity: 0, 
            transform: 'translateY(50px) scale(0.95)',
            filter: 'blur(10px)'
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)'
          },
        },
        "spotlight": {
          '0%, 100%': { 
            boxShadow: 'inset 0 0 200px rgba(119, 86, 70, 0.1), 0 0 80px rgba(162, 111, 37, 0.2)'
          },
          '50%': { 
            boxShadow: 'inset 0 0 300px rgba(119, 86, 70, 0.2), 0 0 120px rgba(162, 111, 37, 0.4)'
          },
        },
        "curtain-rise": {
          from: { 
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            opacity: 0 
          },
          to: { 
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
            opacity: 1 
          },
        },
        "depth-float": {
          '0%, 100%': { 
            transform: 'translateY(0px)',
          },
          '50%': { 
            transform: 'translateY(-8px)',
          },
        },
        "particle-drift": {
          '0%': { 
            transform: 'translateX(-50vw) translateY(50vh)',
            opacity: 0
          },
          '10%': { opacity: 0.8 },
          '90%': { opacity: 0.8 },
          '100%': { 
            transform: 'translateX(50vw) translateY(-50vh)',
            opacity: 0
          },
        },
        "holographic": {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, rgba(119, 86, 70, 0.3), rgba(162, 111, 37, 0.3))',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            background: 'linear-gradient(45deg, rgba(162, 111, 37, 0.3), rgba(119, 86, 70, 0.3))',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            background: 'linear-gradient(45deg, rgba(119, 86, 70, 0.4), rgba(162, 111, 37, 0.2))',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            background: 'linear-gradient(45deg, rgba(162, 111, 37, 0.2), rgba(119, 86, 70, 0.4))',
            filter: 'hue-rotate(270deg)'
          },
        },
        "text-reveal": {
          from: { 
            width: '0%',
            opacity: 0 
          },
          to: { 
            width: '100%',
            opacity: 1 
          },
        },
        "kinetic-scale": {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            letterSpacing: '0em'
          },
          '25%': { 
            transform: 'scale(1.05) rotate(0.5deg)',
            letterSpacing: '0.1em'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(-0.5deg)',
            letterSpacing: '0.2em'
          },
          '75%': { 
            transform: 'scale(1.05) rotate(0.3deg)',
            letterSpacing: '0.1em'
          },
        },
        "depth-layer": {
          '0%': { transform: 'translateZ(0px) rotateX(0deg)' },
          '50%': { transform: 'translateZ(50px) rotateX(5deg)' },
          '100%': { transform: 'translateZ(0px) rotateX(0deg)' },
        },
        "atmospheric": {
          '0%, 100%': { 
            opacity: 0.3,
            transform: 'translateX(0) rotate(0deg) scale(1)'
          },
          '33%': { 
            opacity: 0.7,
            transform: 'translateX(20px) rotate(120deg) scale(1.2)'
          },
          '66%': { 
            opacity: 0.5,
            transform: 'translateX(-15px) rotate(240deg) scale(0.8)'
          },
        },
        "screen-glow": {
          '0%, 100%': { 
            boxShadow: '0 0 50px rgba(119, 86, 70, 0.3), inset 0 0 50px rgba(162, 111, 37, 0.1)'
          },
          '50%': { 
            boxShadow: '0 0 100px rgba(119, 86, 70, 0.5), inset 0 0 100px rgba(162, 111, 37, 0.2)'
          },
        },
        "matrix-rain": {
          '0%': { 
            transform: 'translateY(-100vh)',
            opacity: 0
          },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { 
            transform: 'translateY(100vh)',
            opacity: 0
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 1s infinite",
        // ⭐ OPTIMIZED CINEMATIC ANIMATIONS
        "cinematic-reveal": "cinematic-reveal 1.5s cubic-bezier(0.23, 1, 0.320, 1) forwards",
        "curtain-rise": "curtain-rise 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "spotlight": "spotlight 8s ease-in-out infinite",
        "depth-float": "depth-float 6s ease-in-out infinite",
        "particle-drift": "particle-drift 25s linear infinite",
        "holographic": "holographic 12s ease-in-out infinite",
        "text-reveal": "text-reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "kinetic-scale": "kinetic-scale 6s ease-in-out infinite",
        "depth-layer": "depth-layer 15s ease-in-out infinite",
        "atmospheric": "atmospheric 30s ease-in-out infinite",
        "screen-glow": "screen-glow 10s ease-in-out infinite",
        "matrix-rain": "matrix-rain 12s linear infinite",
      },
      boxShadow: {
        'glow': '0 0 50px rgba(162, 111, 37, 0.5)',
        'neon': '0 0 20px rgba(119, 86, 70, 0.8), 0 0 40px rgba(162, 111, 37, 0.6)',
        'glass': '0 8px 32px 0 rgba(76, 42, 25, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
    container: { 
      center: true, 
      padding: "2rem", 
      screens: { "2xl": "1400px" } 
    },
  },
  plugins: [],
  darkMode: ["class"],
};