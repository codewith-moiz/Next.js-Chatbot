/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        purple: {
          50: '#F7F5FF',
          100: '#F0EBFF',
          200: '#E1D6FF',
          300: '#C7B4FF',
          400: '#B089FF',
          500: '#8056FF',
          600: '#6B44E8',
          700: '#5A38C6',
          800: '#452C96',
          900: '#2D1D62',
        },
        indigo: {
          50: '#F0F1FE',
          100: '#E4E5FF',
          200: '#D6D9FF',
          300: '#B3B7FF',
          400: '#989CFF',
          500: '#A66CFF',
          600: '#9858FF',
          700: '#7A39E5',
          800: '#6029C1',
          900: '#3F1C7A',
        },
        midnight: {
          50: '#F7F7F9',
          100: '#EDEDF2',
          200: '#DCDCE6',
          300: '#B7B7CC',
          400: '#8E8EA6',
          500: '#66667F',
          600: '#4D4D66',
          700: '#36364D',
          800: '#25252D',
          900: '#0E0E12',
          950: '#080809',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        red: {
          500: '#EF4444',
          600: '#DC2626',
        },
        green: {
          500: '#10B981',
          600: '#059669',
        },
        white: '#FFFFFF',
        black: '#000000',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'appear': 'appear 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        appear: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(249, 115, 22, 0.3)',
        'glow-sm': '0 0 8px rgba(249, 115, 22, 0.3)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.orange.600'),
              '&:hover': {
                color: theme('colors.orange.700'),
              },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.orange.600'),
              backgroundColor: theme('colors.orange.50'),
              borderRadius: theme('borderRadius.md'),
              padding: `${theme('spacing.1')} ${theme('spacing.1.5')}`,
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              borderRadius: theme('borderRadius.lg'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.orange.400'),
              '&:hover': {
                color: theme('colors.orange.300'),
              },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.orange.400'),
              backgroundColor: theme('colors.black'),
            },
            pre: {
              backgroundColor: theme('colors.black'),
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 