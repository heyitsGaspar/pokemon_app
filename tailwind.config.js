/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        expandLine: {
          "0%": { width: "0px" },
          "100%": { width: "280px" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
        expandLine: "expandLine 1s ease-out 0.5s forwards",
      },
    },
  },
  plugins: [],
};
