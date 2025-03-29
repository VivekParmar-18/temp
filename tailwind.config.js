module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#2A4B5A',
          secondary: '#E8C07D',
          accent: '#9E2834',
          whatsapp: '#25D366'
        },
        fontFamily: {
          gujarati: ['Shruti', 'Noto Sans Gujarati'],
          hindi: ['Noto Sans Devanagari']
        }
      },
    },
    plugins: [],
  }