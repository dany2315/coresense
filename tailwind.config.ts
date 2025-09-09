import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'dna-rotate': 'dnaRotate 8s linear infinite',
        'dna-float': 'dnaFloat 6s ease-in-out infinite',
      },
      keyframes: {
        dnaHelixRotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        dnaRotate: {
          '0%': { transform: 'rotateY(0deg) rotateX(10deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(10deg)' },
        },
        dnaFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config