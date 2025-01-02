


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: '16px', // Default padding (adjust for your needs)
          sm: '16px',
          lg: '40px',
          xl: '80px',
        },
        maxWidth: {
          DEFAULT: '1280px'
        }
      },
      boxShadow: {
        Dark: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      },
      backgroundColor: {
        primary: '#D06735',
        secondary: '#C0CF32',
        lightPrimary: '#777B8B',
      },
      colors: {
        customTextColor: '#C0CF32', 
        customLight: '#777B8B',
      },
      boxShadow: {
        'custom-merged': '0px 4px 4px -2px #00000008, 0px 10px 22px -3px #00000005',
      },
      boxShadow: {
        'custom-all': 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
      },


    },
  },
  plugins: [],
};

