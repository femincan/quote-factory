/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        'sans-2': ['Acme', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        midnight: '#2c3e50',
        'sun-flower': '#f1c40f',
        clouds: '#ecf0f1',
      },
    },
  },
  plugins: [],
};
