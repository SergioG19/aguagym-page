/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', // Asegúrate de que las rutas estén correctas
  ],
  theme: {
    extend: {
      colors: {
        primary: '#720A6A', // Colores personalizados
        secondary: '#EF792B',
        // Agrega más colores según necesites
      },
    },
  },
  plugins: [],
}
