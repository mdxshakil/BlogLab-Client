/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/images/hero-bg.jpg')",
      },
    },
    animation:{
      float:"floatAnimation"
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["light", "dark","cupcake"],
    themes: [
      {
        light: {
          "primary": "#22C55E",
          "primary-focus": "#15803D",
          "primary-content": "#ffffff",
          "secondary": "#EB6D00",
          // "secondary-focus": "#FF493F",
          // "secondary-content": "#000000",
          "accent": "#3268FF",
          // "accent-focus": "#1E45FF",
          // "accent-content": "#FFFFFF",
          "neutral": "#FFFFFF",
          // "neutral-focus": "#E5E5E5",
          // "neutral-content": "#000000",
          "base-100": "#FFFFFF",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1F2937",
          "info": "#66C6FF",
          "success": "#87D039",
          "warning": "#E2D562",
          "error": "#EF4444"
        },
      },
      {
        dark: {
          "primary": "#22C55E",
          "primary-focus": "#15803D",
          "primary-content": "#ffffff",
          "secondary": "#EB6D00",
          // "secondary-focus": "#FF493F",
          // "secondary-content": "#000000",
          "accent": "#3268FF",
          // "accent-focus": "#1E45FF",
          // "accent-content": "#FFFFFF",
          "neutral": "#FFFFFF",
          // "neutral-focus": "#E5E5E5",
          // "neutral-content": "#000000",
          "base-100": "#1D232A",
          "base-200": "#191E24",
          "base-300": "#15191E",
          "base-content": "#A6ADBA",
          "info": "#66C6FF",
          "success": "#87D039",
          "warning": "#E2D562",
          "error": "#EF4444"
        }
      }
    ]
  },
}