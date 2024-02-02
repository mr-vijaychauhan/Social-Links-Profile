/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'grey':'hsl(0, 0%, 20%)',
        'dark-grey' : 'hsl(0, 0%, 12%)',
        'off-black' : 'hsl(0, 0%, 8%)',
        'primary' : 'hsl(75, 94%, 57%)',
      },
    },
    screens:{
      'sm': '375px',
      'lg': '1440px'
    },
  },
  plugins: [],
};
