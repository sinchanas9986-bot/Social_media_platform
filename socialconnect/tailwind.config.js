module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // indigo-600
          50: "#EEF2FF", // indigo-50
          100: "#E0E7FF", // indigo-100
          500: "#6366F1", // indigo-500
          600: "#4F46E5", // indigo-600
          700: "#4338CA", // indigo-700
        },
        secondary: {
          DEFAULT: "#6B7280", // gray-500
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
        },
        accent: {
          DEFAULT: "#F59E0B", // amber-500
          100: "#FEF3C7", // amber-100
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        text: {
          primary: "#111827", // gray-900
          secondary: "#6B7280", // gray-500
        },
        success: {
          DEFAULT: "#10B981", // emerald-500
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'contextual-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'contextual-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'contextual-lg': '0 20px 25px rgba(0, 0, 0, 0.15)',
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        'social': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      animation: {
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
        'scale-hover': 'scale-hover 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scale-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'social': '0.75rem',
      },
    },
  },
  plugins: [],
}