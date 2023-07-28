/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#181818',
        'white-primary': '#a1a1a1',
        'primary': '#ee6192',
        'secondary': '#2b2d30',
        'button-bg': '#35373b'
      },
    },
  },
  plugins: [],
}
