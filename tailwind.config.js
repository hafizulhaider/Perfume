module.exports = {
  content: [
    './index.html', // Include HTML file
    './src/**/*.{js,ts,jsx,tsx}' // Include JS/TS files in src folder
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px"
    },
    extend: {
      colors: {
        bodyColor:"hsl(300, 100%, 2%)",
        secColor: "hsl(300, 100%, 5%)",
        cardColor:"hsl(300, 100%, 10%)",
        titleColor: "hsl(300, 100%, 23%)",
        textColor: "hsl(0, 0%, 100%)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      DancingScript: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
}
