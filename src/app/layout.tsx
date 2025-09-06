import '@/styles/reset.css';
import '@/styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import { Open_Sans, Outfit } from 'next/font/google';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Logo from '@/components/logo';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'PrimeCondies',
  description: 'A weather app for rock climbers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="flex min-h-screen flex-col" lang="en">
      <body className={`flex flex-1 flex-col antialiased ${outfit.variable} ${openSans.variable}`}>
        <header className="flex h-14 items-center border-b border-zinc-50 px-5 md:px-4">
          <Logo />
        </header>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
        <Analytics />
      </body>
    </html>
  );
}
