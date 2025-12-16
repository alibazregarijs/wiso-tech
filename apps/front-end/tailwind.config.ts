import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        green: {
          dark: {
            100: '#102219',
            200: '#141d1a',
          },
          light: {
            100: '#13ec80',
            200: '#12c66d',
          },
        },
        gray: {
          dark: {
            100: '#27272a',
          },
          light: {
            100: '#85858c',
          },
        },
        white: '#f6f8f7',
        orange: {
          light: {
            100: '#f97316',
          },
        },
      },
      fontFamily: {
        lexend: ['var(--font-lexend)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
    },
  },
} satisfies Config;

export default config;
