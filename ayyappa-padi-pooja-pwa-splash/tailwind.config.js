/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        dev: ["Tiro Devanagari Hindi", "serif"],
      },
      colors: {
        ayyappa: {
          orange: "#f97316",
          yellow: "#fde047",
          blue: "#1e3a8a",
          gold: "#d4af37",
        },
      },
      backgroundImage: {
        devotional: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(253,224,71,0.15)), radial-gradient(1000px 500px at 10% 10%, rgba(253,224,71,.25), transparent 60%), radial-gradient(800px 400px at 90% 30%, rgba(30,58,138,.25), transparent 60%)",
      },
    },
  },
  plugins: [],
};
