/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "glow-yellow": [
          "0 0px 10px rgba(255,255, 0, 1)",
          "0 0px 45px rgba(255, 255,0, 1)",
        ],
        border: ["0 0px 1px rgba(255,255, 0, 1)"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "20%": { opacity: 0 },
          "90%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 0.1s infinite", // 1s duration, infinite loop
      },
    },
  },
  plugins: [],
};
