import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a27',
          600: '#252535',
        },
        light: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
        },
        neon: {
          // Improved readability with better contrast ratios
          cyan: '#00e5ff',
          pink: '#ff10f0',
          purple: '#a855f7',
          green: '#10f0a0',
          blue: '#3b82f6',
          yellow: '#fbbf24',
          orange: '#fb923c',
        },
        // Light theme accent colors (darker versions for contrast)
        accent: {
          cyan: '#0891b2',
          pink: '#db2777',
          purple: '#7c3aed',
          green: '#059669',
        },
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glitch-skew': 'glitch-skew 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-skew': {
          '0%, 100%': { transform: 'skew(0deg)' },
          '20%': { transform: 'skew(-0.5deg)' },
          '40%': { transform: 'skew(0.5deg)' },
          '60%': { transform: 'skew(-0.5deg)' },
          '80%': { transform: 'skew(0.5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)' 
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
