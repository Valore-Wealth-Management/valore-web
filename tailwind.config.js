/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep':      '#1c2030',
        surface:        '#232738',
        card:           '#2b2f42',
        accent:         '#d4a843',
        'accent-hover': '#f0c96a',
        fg:             '#e8e4dc',
        'fg-dim':       '#b0b8cc',
        muted:          '#7880a0',
        border:         '#343d58',
        positive:       '#3ecf82',
        negative:       '#e05555',
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'ui-serif', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem',   { lineHeight: '1.1' }],
        '6xl': ['3.75rem',{ lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.0' }],
      },
    },
  },
  plugins: [],
}
