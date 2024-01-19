/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-primary": "hsl(180, 66%, 49%)",
        "dark-violet-primary": "hsl(257, 27%, 26%)",
        "gray-neutral": "hsl(0, 0%, 75%)",
        "grayish-violet-neutral": "hsl(257, 7%, 63%)",
        "very-dark-blue-neutral": "hsl(255, 11%, 22%)",
        "very-dark-violet-neutral": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        ["sans"]: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "shorten-desktop": "url('/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/images/bg-shorten-mobile.svg')",
        "boost-desktop": "url('/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('/images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
