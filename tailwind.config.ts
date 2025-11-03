import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1bc9a3',
        
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '11/12': '91.666667%',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        

        "max-2xl": { max: "1535px" },

        "max-xl": { max: "1279px" },
        "max-lg2": { max: "1149px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xs": { max: "479px" },
      },
      flexBasis: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '11/12': '91.666667%',
      },
      fontFamily: {   // <-- moved here
        'lora': ['Lora', 'serif'],
        'outfit': ['Arimo', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
});

export default config;
