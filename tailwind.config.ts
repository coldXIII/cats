import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#1D1D1D',
        gray: '#8C8C8C',
        lightgray: '#F8F8F7',
        primary: '#FF868E',
        primaryLight: '#FBE0DC',
        blue: '#B4B7FF',
        green: '#97EAB9',
        yellow: '#FFD280',
      },
      screens: {
        sm: '450px',
        md: '650px',
        lg: '990px',
        xl: '1124px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
