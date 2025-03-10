/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-100': '#FFFFFF',
        'black-100': '#000000',
        'pitch-black' : '#000000',
        'grey-100': '#FAFAFA',
        'grey-200': '#F4F4F4',
        'grey-300': '#EEEEEE',
        'grey-400': '#DBDBDB',
        'graphite-grey': '#828282',
        'robin-100': '#E8F2FC',
        'robin-200': '#BCD3EB',
        'yellow-100': '#FFFCE9',
        'yellow-200': '#FCF6D2',
        'yellow-300': '#FFCA52',
        'green-100': '#009C5B',
        'green-200': '#D7F6E1',
        'green': '#098843',
        'pink-100': '#FAF9F7',
        'pink-200': '#F7EFF9',
        'default-pink': '#F7EFF9',
        'purple-100': '#F9F6FF',
        'purple-200': '#DFD7EF',
        'dark-100' : '#B0B0B0',
        'dark-200' : '#808080',
        'dark-300' : '#353535',
        'dark-400' : '#262626',
        'dark-500' : '#0F0F0F',
        'blue-100' : '#307DEB',
        'blue-200' : '#1258BA',
        'blue-300' : '#002861',
        'red-100' : '#FFCBC1',
        'red-200' : '#D82C0D',
        'red-300' : '#C12B10',
        'red-400' : '#6F1100',
        'bg-primary' : '#FFFFFF',
        'bg-secondary' : '#FAFAFA',
        'bg-tertiary' : '#F4F4F4',
        'bg-contrast' : '#EEEEEE',
        'border-primary' : '#F4F4F4',
        'border-secondary' : '#EEEEEE',
        'text-contrast' : '#000000',
        'text-muted' : '#B0B0B0',
        'text-secondary' : '#353535',
        'text-tertiary' : '#3C3C3C',
        'interactive-link-default' : '#307DEB',
        'interactive-link-pressed' : '#002861',
        'interactive-critical-default' : '#D82C0D',
        'surface-default-purple' : '#DFD7EF',
        'surface-subdued-purple' : '#F9F6FF',
        'brand-green' : '#00872e',
        'brand-limegreen' : '#bbee61',
        'brand-secondary-green' : '#beef62',
        'brand-midnight' : '#001120',
        'brand-cornflower' : '#0047ff',
        'brand-blue' : '#cae5f6',
        'brand-yellow' : "#e7fc4b",
        'jth-white' : '#f1efeb',
        'jth-dark' : '#231F20',
        'jth-orange' : '#ff4400',
        'jth-lightorange' : '#f7e1b5',
        'jth-green' : '#004437',
        'jth-lightgreen' : '#c8e6d8',
      },
      fontFamily: {
        primary : ['var(--font-neue-montreal)'],
        secondary : ['var(--font-neue-montreal)'],
        tertiary : ['var(--font-neue-montreal)'],
      },
      screens: {
        'md' : '744px',
      },
      keyframes: {
        bgFadeBrandGreen: {
          '0%' : { "background-color" : 'initial' },
          '100%': { "background-color" : '#00872e' },
        },
        bgFadeGrey: {
          '0%' : { "background-color" : 'initial' },
          '100%': { "background-color" : '#F4F4F4' },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
        },
        accordionOpen: {
          '0%' : { "grid-template-rows": "0fr" },
          '100%': { "grid-template-rows": "1fr" },
        },
      },
      animation: {
        'bg-fade-brand-green' : 'bgFadeBrandGreen 5000ms ease-out',
        'bg-fade-grey' : 'bgFadeGrey 300ms ease-out',
        'fade-out-up': 'fade-out-up 4s',
        'accordion-open-anim' : 'accordionOpen 500ms ease-in-out',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.thin-scrollbar': {
          'scrollbar-width': 'thin',
        },
      })
    })
  ]
}
