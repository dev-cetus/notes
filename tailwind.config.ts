import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        'azure-radiance': {
          '50': '#eef5ff',
          '100': '#d9e8ff',
          '200': '#bcd8ff',
          '300': '#8ec1ff',
          '400': '#599dff',
          '500': '#3479ff',
          '600': '#1b56f5',
          '700': '#1442e1',
          '800': '#1736b6',
          '900': '#19328f',
          '950': '#142057',
        },
      }
    },
  },
  plugins: [],
} satisfies Config

