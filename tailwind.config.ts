import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #D434FE, #903AFF)',
        'lefthead': "url('/images/man.png')",
        'privacy': "url('/images/privacy.png')",
      },
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        register: 'var(--register)',
      }
    },
  },
  plugins: [],
}
export default config
