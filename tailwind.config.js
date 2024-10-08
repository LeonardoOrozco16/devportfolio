/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      light: {
        bg: "#ffffff",
        title: "#01113d",
        link: "#0338c9",
        detail: "#997a04",
        text: "#424242",
      },
      dark: {
        bg: "#01113d",
        title: "#ffffff",
        link: "#997a04",
        detail: "#0338c9",
        text: "#e0e0e0",
      },
    },
    extend: {
      boxShadow: {
        "glass-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "glass-dark": " 0 4px 6px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
