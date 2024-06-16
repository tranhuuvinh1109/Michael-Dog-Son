/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#97D1EB",
        bluePrimary80: "rgba(9, 27, 53, 0.8)",
        bgPrimary: "#091B35",
        text: "#FCFCF7",
      },
      fontFamily: {
        acme: ["Acme", "sans-serif"],
      },
      backgroundImage: {
        button: "url('./bg-button.png')",
        buttonHover: "url('./bg-button-hover.png')",
        bgWelcome: "url('./bg-welcome.png')",
        bgButtonDefault: "url('./bg-button-default.png')",
        bgButtonScale: "url('./bg-button-scale.png')",
        bgButtonScaleHover: "url('./bg-button-scale-hover.png')",
        bgBlur: "url('./Blur.png')",
        bgContainerBlue: "url('./bg-container-blue.png')",
        bgCircle: "url('./circle.png')",
        bgBorder: "url('./bg-button-border.png')",
        bgCircleRoadmap: "url('./circle-roadmap.png')",
      },
    },
  },
  plugins: [],
};
