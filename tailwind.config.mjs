/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4ade80", // Green
          secondary: "#22d3ee", // Cyan
          accent: "#f472b6", // Pink
          neutral: "#f3f4f6", // Light Gray
          "base-100": "#ffffff", // White background
          "base-200": "#f9fafb", // Very light gray background
          "base-300": "#d1d5db", // Light gray for borders
          info: "#3b82f6", // Blue
          success: "#22c55e", // Green
          warning: "#facc15", // Yellow
          error: "#ef4444", // Red
        },
      },
    ],
    base: true, // Enable base styles
    utils: true, // Enable utilities
    logs: true, // Show logs for DaisyUI
    darkTheme: false, // Disable dark mode completely
  },
};
