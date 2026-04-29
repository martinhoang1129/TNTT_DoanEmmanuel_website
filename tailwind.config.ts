import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F0',
        gold: '#C8923A',
        'gold-light': '#F0C97A',
        navy: '#0F2044',
        'navy-mid': '#1A3560',
        'text-muted': '#5A5A5A'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15,32,68,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
