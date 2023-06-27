/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./portfolio_app/templates/*/*.{html,css}"],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(var(--primary))",
        "primarydark": "hsl(var(--primarydark))",
        "primarylight": "hsl(var(--primarylight))",   
        "accent": "hsl(var(--accent))",
        "lightaccent": "hsl(var(--lightaccent))",
        "background": "hsl(var(--background))",
        "text": "hsl(var(--text))", 
        "action": "hsl(var(--action))",
        "shade": "hsl(var(--shade))",
      },
    },
  },
  plugins: [],
}