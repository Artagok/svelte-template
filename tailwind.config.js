module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
