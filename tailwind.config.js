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
      screens: {
        // desktop: "1600px",
        desktoplg: "1900px",
        desktopxl: "2300px",
        desktop2xl: "2600px",
      },
      keyframes: {
        fillStar: {
          "0%": { transform: "rotateY(0deg) scale(1)" },
          "100%": { transform: "rotateY(360deg) scale(1)" },
        },
      },
      animation: {
        fillStar: "fillStar 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
