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
        // Gold accent (was brown) — refined champagne gold
        brown: {
          DEFAULT: '#A8834A',
          dark: '#86672F',
          light: '#C9A96E',
        },
        gold: {
          DEFAULT: '#A8834A',
          dark: '#86672F',
          light: '#C9A96E',
          pale: '#EFE4CC',
        },
        neutral: {
          bg: '#F6F1E7',
          white: '#FFFFFF',
          'light-gray': '#E7DECD',
          'medium-gray': '#646A73',
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
      boxShadow: {
        soft: '0 1px 2px rgba(15, 37, 56, 0.04), 0 4px 16px -4px rgba(15, 37, 56, 0.06)',
        lift: '0 2px 4px rgba(15, 37, 56, 0.04), 0 16px 40px -12px rgba(15, 37, 56, 0.16)',
        gold: '0 0 0 1px rgba(168, 131, 74, 0.35), 0 16px 40px -12px rgba(168, 131, 74, 0.25)',
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
