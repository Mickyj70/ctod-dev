/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bordercolor: "var(--bordercolor)",
        secondaryText: "var(--secondaryText)",
        primaryText: "var(--primaryText)",
        positive: "var(--positive)",
        negative: "var(--negative)",
        placeholderText: "var(--placeholderText)",
        sidebar: "var(--sidebar)",
        fadedText: "var(--fadedText)",
        chartBg: "#1a1a1a",
        candleGreen: "#00b894",
        candleRed: "#d63031",
      },
    },
  },
  plugins: [],
};
