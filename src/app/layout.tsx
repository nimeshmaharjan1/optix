import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Open_Sans as FontSans } from 'next/font/google';
import { ReactNode } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const metadata: Metadata = {
  title: 'Optix',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
