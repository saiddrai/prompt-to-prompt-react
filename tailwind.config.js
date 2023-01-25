/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#412779",
        secondary: "#BC7E8B",
      },
      backgroundImage: (theme) => ({
        backg: "url('../public/background.jpg')",
      }),
    },
  },
  plugins: [],
};
