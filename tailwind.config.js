/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
            app: 'minmax(18rem, 20rem) 1fr',
            form: 'minmax(7.5rem, 15rem), minmax(25rem, 1fr), minmax(0, 15rem)',
          },
          borderWidth: {
            6: '6px',
          },
    
          colors: {
            error: {
              25: '#FFFBFA',
              50: '#FEF3F2',
              100: '#FEE4E2',
              200: '#FECDCA',
              300: '#FDA29B',
              400: '#F97066',
              500: '#F04438',
              600: '#D92D20',
              700: '#B42318',
              800: '#912018',
              900: '#7A271A',
            },
          },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')],
}
