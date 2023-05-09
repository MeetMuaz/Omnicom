/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxHeight: {
        'custom': '35rem',
      },
      minWidth: {
        'screen': '100vw',
        'form': '70%'
      },
      maxHeight: {
        'form': '70%'
      },
      outlineWidth: {
        0.2: '0.2px',
      }
    },
  },
  plugins: [],
}
