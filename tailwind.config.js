module.exports = {
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 1s ease forwards',
          'slide-up': 'slideUp 1s ease forwards',
        },
        fontFamily: {
            ovo: ["Ovo", "serif"], 
          },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideUp: {
            '0%': { transform: 'translateY(50px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
        },
      },
    },
  };