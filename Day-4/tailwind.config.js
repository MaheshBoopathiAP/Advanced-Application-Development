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
        'sale' : 'url("./src/assets/images/lastwowsmall.png")',
        'home-boat' : 'url("./src/assets/images/home-pic.jpg")',
        'login-gradient' : 'url("./src/assets/images/Gotham.jpeg")',
      }
    },
    filter: {
      'blur': 'blur(5px)', // Adjust blur strength as needed
    },
  },
  plugins: [],
}

