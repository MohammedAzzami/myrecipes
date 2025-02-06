/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: "350px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    // colors: {
    //   red: "#E11D48",
    //   brown: "#53423e",
    //   lightBrown: "#645550",
    //   darkBrown: "#2c2523",
    //   black: "#1e1917",
    //   white: "#f1e1d9",
    //   cyan: "#15d1e9",
    //   lightCyan: "#88e5f0",
    //   darkCyan: "#009fb3",
    //   orange: "#fb9718",
    //   lightOrange: "#fac27b",
    //   darkOrange: "#d28422",
    //   grey: "#626965",
    //   lightGrey: "#978580",
    //   darkGrey: "#3f4441",
    // },
    // letterSpacing: {
    //   tagline: ".15em",
    // },
    // zIndex: {
    //   1: "1",
    //   2: "2",
    //   3: "3",
    //   4: "4",
    //   5: "5",
    // },
    extend: {
      fontFamily: {
        sansita: ['Sansita', 'sans-serif'],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  // plugins: [
  //   plugin(function ({ addBase, addComponents, addUtilities }) {
  //     addBase({});
  //     addComponents({
  //       ".container": {
  //         "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
  //           {},
  //       },
  //       ".h1": {
  //         "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
  //           {},
  //       },
  //       ".h2": {
  //         "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
  //           {},
  //       },
  //       ".h3": {
  //         "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
  //       },
  //       ".h4": {
  //         "@apply text-[2rem] leading-normal": {},
  //       },
  //       ".h5": {
  //         "@apply text-2xl leading-normal": {},
  //       },
  //       ".h6": {
  //         "@apply font-semibold text-lg leading-8": {},
  //       },
  //       ".body-1": {
  //         "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
  //           {},
  //       },
  //       ".body-2": {
  //         "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
  //       },
  //       ".caption": {
  //         "@apply text-sm": {},
  //       },
  //       ".tagline": {
  //         "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
  //           {},
  //       },
  //       ".quote": {
  //         "@apply font-code text-lg leading-normal": {},
  //       },
  //       ".button": {
  //         "@apply font-code text-xs font-bold uppercase tracking-wider": {},
  //       },
  //     });
  //     addUtilities({
  //       ".tap-highlight-color": {
  //         "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
  //       },
  //     });
  //   }),
  // ],
}

