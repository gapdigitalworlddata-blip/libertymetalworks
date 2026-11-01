import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://libertymetalworks.vercel.app'),
  title: 'Liberty Metal Works — Premium Architectural Hardware',
  description: 'Liberty Metal Works crafts precision architectural hardware for global B2B markets. ISO-certified manufacturer exporting to USA, UK, Europe and beyond since 1956.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorantGaramond.variable}`}>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
