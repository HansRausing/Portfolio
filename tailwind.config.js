import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
    },
    colors: {
      primary: {
        200: "#ffffff", // almost white
        400: "#4b49b6", // dark pink
        500: "#817fcc", // light pink
        600: "#343380", // wine
      },
      grayscale: {
        25: "#E4E2DD", // beige
        50: "#817fcc",
        100: "#efefef",
        200: "#FDFDFF",
        950: "#24248f",
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
