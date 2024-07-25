/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "off-white": "#E8E8E8",
      },
      fontFamily: {
        "brown-sugar": ["Brown sugar", "cursive"],
        satoshi: [
          "Satoshi",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        "nav-shadow": "0 4px 4px 2px #22222210",
      },
      backgroundImage: {
        "metallic-gradient":
          "linear-gradient(90deg, #55555550 0%, #FFFFFF50 49%, #55555550 100%)",
      },
    },
  },
  plugins: [],
}
