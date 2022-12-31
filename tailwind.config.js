/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00E1BF",

          "secondary": "#0B3558",

          "accent": "#F47169",

          "neutral": "#F4F5FA",

          "base-100": "#FFFFFF",

          "info": "#F77062",

          "success": "#FE5393",

          "warning": "#000000",

          "error": "#F87272",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}