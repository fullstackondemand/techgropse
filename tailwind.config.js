/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**/*.{html,ts}"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  darkMode: "class",
  theme: {
    /** Define Screen Resolution */
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      /** Define Custom Color */
      colors: {
        primary: '#0D6EFD',
        alt: "#05081A",
        alt1: "#D9D9D9",
        alt2: "#0B0E22",
        alt3: "#121526",
      },
      /** Define Custom Font Family */
      fontFamily: {
        inherit: 'inherit',
        default: ['Poppins', 'sans-serif'],
        alt: ["Mulish", 'sans-serif']
      },
      /** Define Custom Font Size */
      fontSize: {
        inherit: 'inherit'
      },
      /** Define Custom Line Height */
      lineHeight: {
        inherit: 'inherit'
      },
    },
  },
  corePlugins: {
    filter: false,
    /** Define Opacity */
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    preflight: false,
  }
}