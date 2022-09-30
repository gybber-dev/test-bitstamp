/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
      },
      colors: {
        'smart-blue': '#4e95f5',
        'buy': '#00a159',
        'back': '#313337',
        'back-dark': 'rgb(24, 25, 27)',
        'widget-title': '#202124',
        'widget-border': '#2d2f33',
        'widget-border-light': '#313337',
        'green-block': 'rgb(0,161,89)',
        'red-block': 'rgb(223,66,73)',
        'scroll': 'rgba(104,109,112,0.7)',
        'row-shade': 'rgba(43,45,49,.5)',
      },
      gridTemplateColumns: {
        '1-auto': 'repeat(1, auto)',
        '2-auto': 'repeat(2, auto)',
        '3-auto': 'repeat(3, auto)',
        '4-auto': 'repeat(4, auto)',
      },

    },
  },
  plugins: [],
}
