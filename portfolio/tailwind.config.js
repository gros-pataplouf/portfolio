/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./portfolio_app/templates/*/*.{html,css}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          200: "hsl(var(--primarylight))",
          DEFAULT: "hsl(var(--primary))",
          500: "hsl(var(--primary))",
          600: "hsl(var(--primarydarker))",
          700: "hsl(var(--primarydark))",
          800: "hsl(var(--primarydarkest))",
        },
        "accent": "hsl(var(--accent))",
        "action": "hsl(var(--action))",
        "shade": "hsl(var(--shade))",
        "violet": "hsl(var(--violet))",
        "green": "hsl(var(--green))",
        "terminal": "hsl(var(--terminal))",
        "lilac": "hsl(var(--lilac))"
      },
      spacing: {
        '120': '30rem',
        '160': '40rem'
      },
      fontFamily : {
        'sunrise': ['Sunrise', 'sans-serif'],
        'cascadia': ['Cascadia', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        'lato': ['Lato', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
  purge: {
    safelist: [
      'js__nav-visible',
      'js__nav-invisible',
      'js__skill_active',
      'js__language-switcher',
      'bg-lilac', 
      'bg-terminal',
      'bg-action'

    ]
  },
}

