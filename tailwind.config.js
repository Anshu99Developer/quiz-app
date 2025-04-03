/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "480px",
        md: "768px",
        lg: "1025px",
        xl: "1300px",
        "2xl": "1400px",
      },
      colors: {
        primary: "#B92B5D", // Example custom color
        secondary: "#373052",
        light: "#E9E8E3",
        borderColor: "#D9D9D9",
        color_C2C2C2: "#C2C2C2",
        placeholderColor: "rgba(46,46,46,0.4)",
        backdropColor: "rgba(0,0,0,0.3)",
        success:"#06AF52",
      },
      boxShadow: {},
      fontSize: {
        26: "1.625rem",
      },
    },
  },
  plugins: [],
};
