/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navio-dark': '#1B3C53',
        'navio-blue': '#234C6A',
        'navio-light-blue': '#456882',
        'navio-cream': '#D2C1B6',
        'card-dark': '#234C6A',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Liberation Sans',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

