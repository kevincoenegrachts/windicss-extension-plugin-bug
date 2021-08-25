import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CDF523',
          text: '#000',
          light: '#f25255',
        },
        secondary: {
          DEFAULT: '#191919',
          text: '#fff',
          light: '#292929',
        },
        white: '#fff',
        black: '#000',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  plugins: [require('windicss/plugin/aspect-ratio'), require('@windicss/plugin-scrollbar'), require('windicss/plugin/line-clamp')],
})
