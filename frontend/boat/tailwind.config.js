/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-cruise': 'url("./src/assets/images/icon-of-the-seas.avif")',
        'logo': 'url("./src/assets/images/logo.jpeg")',
        'home-pic': 'url("./src/assets/images/boat-house-wallpaper.jpg")',
      }
    },
    filter: {
      blur: 'blur(5px)', // Adjust blur strength as needed
    },
  },
  plugins: [],
}

