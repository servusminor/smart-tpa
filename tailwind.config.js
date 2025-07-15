/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'sans-serif'],
      },
      colors: {
        'amal-green': '#669141',
        'white': '#FFFFFF',
        'text-dark': '#333333',
        'text-body': '#666666',
        'border-super-soft': 'rgba(102,145,65,0.06)', // fallback for border
        'border-super-soft-hex': '#eaf2e7',
        primary: {
          DEFAULT: '#669141',
          light: '#8CAD71',
          dark: '#4C7630',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          light: '#FFFFFF',
          dark: '#F5F5F5',
        },
        accent: {
          DEFAULT: '#669141',
          light: '#8CAD71',
          dark: '#4C7630',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
