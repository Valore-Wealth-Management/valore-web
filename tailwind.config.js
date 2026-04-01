/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep':      '#F5F0E8',
        surface:        '#FEFCF8',
        card:           '#EDE8DF',
        accent:         '#9E7437',
        'accent-hover': '#C49040',
        fg:             '#162745',
        'fg-dim':       '#3D4E65',
        muted:          '#7080A0',
        border:         '#D8D0C4',
        positive:       '#2A6B48',
        negative:       '#8B2828',
      },
      fontFamily: {
        sans:  ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'ui-serif', 'serif'],
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
