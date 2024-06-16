/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#97D1EB",
        bgPrimary: "#091B35",
        text: "#FCFCF7",
      },
    },
  },
  plugins: [],
};
