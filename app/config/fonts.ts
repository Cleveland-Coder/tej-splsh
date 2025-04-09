import { Lato } from 'next/font/google';

export const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  fallback: ['Helvetica', 'Verdana', 'sans-serif'],
  preload: false,
});
