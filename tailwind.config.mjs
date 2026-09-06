/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: {
          DEFAULT: '#121212',
          subtle: '#18181b',
          muted: '#27272a',
        },
        border: {
          DEFAULT: '#262626',
          subtle: '#1f1f1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(255, 255, 255, 0.05)',
        'glow-accent': '0 0 50px -15px rgba(59, 130, 246, 0.15)',
      },
    },
  },
  plugins: [],
};
