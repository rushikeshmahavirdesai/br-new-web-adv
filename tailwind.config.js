/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        devanagari: ["Noto Sans Devanagari"],
      },
      textColor: {
        brandGreen: "#347571",
        brandBg: "#dcefee",
      },
    },
    backgroundColor: {
      brandGreen: "#5EC57E",
      brandBg: "#dcefee",
      brandGray: "rgba(204, 204, 204, .7)",
      white: "white",
    },
  },

  plugins: [require("daisyui")],
};
