import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette - Based on Symoura logo navy and RevenueFlow-inspired neutrals
        navy: {
          DEFAULT: '#1A3D5C',
          dark: '#0F2538',
          light: '#2A5A82',
        },
        blue: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
        },
        brown: {
          DEFAULT: '#8B6F47',
          dark: '#6B5537',
          light: '#A38B66',
        },
        neutral: {
          bg: '#EEEEEE',
          white: '#FFFFFF',
          'light-gray': '#E8E6E3',
          'medium-gray': '#6B7280',
          'dark-gray': '#1F2937',
        },
        // Functional Colors (Dashboard)
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', fontWeight: '600' }],
        'hero-lg': ['64px', { lineHeight: '1.1', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};

export default config;
