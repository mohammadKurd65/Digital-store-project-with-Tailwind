module.exports = {
    content: ["./public/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ["Vazir"],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require("@tailwindcss/forms")({
        strategy: 'class', 
      }),
    ],
  };