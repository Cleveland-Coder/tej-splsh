import { Arsenal, Lato, Open_Sans } from 'next/font/google';

export const arsenalBoldItalic = Arsenal({
  weight: '700',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arsenal-bold-italic',
  fallback: ['Helvetica', 'Verdana', 'sans-serif'],
  preload: false,
});

export const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  fallback: ['Helvetica', 'Verdana', 'sans-serif'],
  preload: false,
});

export const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  fallback: ['Helvetica', 'Verdana', 'sans-serif'],
  preload: false,
});
