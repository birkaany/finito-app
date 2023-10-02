/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryColor: "#5FC795",
      primaryLightColor: "#83DDB2",
      black: "#000112",
      linesDark: "#3E3F4E",
      mediumGrey: "#828FA3",
      linesLight: "#E4EBFA",
      lightGrey: "#F4F7FD",
      white: "#FFFFFF",
      red: "#EA5555",
      lightRed: "#FF9898",
    },
    fontFamily: {
      mainFont: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        textXl: "24px",
        textL: "18px",
        textM: "15px",
        textS: "12px",
      },
    },
  },
  plugins: [],
};
