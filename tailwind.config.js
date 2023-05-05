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
    },
  },
  plugins: [],
};
