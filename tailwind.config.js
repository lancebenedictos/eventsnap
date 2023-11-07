/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F3F3F3",
        warning: "#D07651",
        cta: "#EAAD98",
        ctaLight: "#EAE3DB",
        darkText: "2E2E2E",
      },
    },
  },
  plugins: [],
};
