/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/About/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#F6F7F8',
      white:'#FFFFFF',
      secondary: '#C8CCD414',
      tertiary: '##C8CCD41A',
      quaternary: '#072635',
      quinary: '#E3E4E6',
      active: '#01F0D0',
      senary: '#F9FAFB',
      septenary: '#F3F4F6'},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/app/src/assets/img/planet.jpg')"
      },
    },
  },
  plugins: [],
}

