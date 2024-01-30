import '@/app/[lang]/globals.css';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Open_Sans as FontSans } from 'next/font/google';
import { ReactNode } from 'react';

import { Locale, i18n } from '@/i18n.config';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Optix',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface RootLayoutProps {
  children: ReactNode;
  params: {
    lang: Locale;
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
