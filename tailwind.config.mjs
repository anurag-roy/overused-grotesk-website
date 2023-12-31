import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        grey: '#555555',
      },
      fontWeight: {
        book: '350',
      },
      fontFamily: {
        sans: ['OverusedGrotesk-VF', ...fontFamily.sans],
      },
    },
  },
};
