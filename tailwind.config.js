/** @type {import('tailwindcss').Config} */
import designTokens from './app/tokens.json';
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add custom breakpoints here
      screens: {
        sm: '640px',   // Small devices (landscape phones)
        md: '768px',   // Medium devices (tablets)
        lg: '1024px',  // Large devices (desktops)
        xl: '1280px',  // Extra large devices (large desktops)
        '2xl': '1536px' // 2xl devices (larger desktops)
      },
      borderColor: {
        DEFAULT: 'var(--border)',
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        link: 'var(--link-color)',
        brand: designTokens.color?.['brand-primary']?.value || '#002f6c',
      },
      spacing: {
        'brand-md': designTokens.spacing?.md?.value ? `${designTokens.spacing.md.value}px` : '16px',
      }
    },
  },
  plugins: [],
}