import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0f0e',
        'terminal-bg': '#080a09',
        'panel-bg': '#0f1210',
        border: '#1a1f1c',
        border2: '#232b27',
        green: '#39ff7a',
        'green-dim': '#1a7a3d',
        'green-glow': 'rgba(57, 255, 122, 0.08)',
        amber: '#ffb347',
        cyan: '#38e8d8',
        red: '#ff5f5f',
        blue: '#5b9cf6',
        muted: '#3a4a3f',
        muted2: '#2a3530',
        text: '#b8c4bc',
        'text-bright': '#e0ece4',
        'text-dim': '#5a6b60',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
