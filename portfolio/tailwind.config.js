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
          800: "hsl(var(--primarydark))",
        },
        "primarydark": "hsl(var(--primarydark))",
        "primarydarker": "hsl(var(--primarydarker))",
        "primarydarkest": "hsl(var(--primarydarkest))",
        "primarylight": "hsl(var(--primarylight))",   
        "accent": "hsl(var(--accent))",
        "action": "hsl(var(--action))",
        "shade": "hsl(var(--shade))",
        "violet": "hsl(var(--violet))",
        "green": "hsl(var(--green))",
      },
    },
  },
  plugins: [],
}