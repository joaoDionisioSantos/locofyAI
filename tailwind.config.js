/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text2: "#000",
        gray: {
          "100": "#030406",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        text: "#fafafa",
        primary: "#fff",
        "secondary-2": "#db4444",
        secondary: "#f5f5f5",
        "hover-button": "#e07575",
        button1: "#00ff66",
      },
      spacing: {},
      fontFamily: {
        "title-16px-regular": "Poppins",
        "heading-24px-bold": "Inter",
      },
      borderRadius: {
        "11xs-4": "1.4px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      xl: "20px",
      "5xl": "24px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
