/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        animationAvatar: {
          "0%": { marginRight: "-200px" },
          "100%": { marginRight: "0px" },
        },
        snowFall: {
          "0%": { opacity: "0", top: "0", transform: "translateX(-5px)" },
          "10%": { opacity: "1", transform: "translateX(5px)" },
          "20%": { transform: "translateX(-5px)" },
          "30%": { opacity: "1", transform: "translateX(5px)" },
          "40%": { transform: "translateX(-5px)" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", top: "100vh" },
        },
      },
      animation: {
        avatar: "animationAvatar 2s ease-in-out",
        snow: "snowFall 10s linear",
      },
    },
  },
  plugins: [],
};
