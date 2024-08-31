import "@/styles/reset.scss";
import "@/styles/global.scss";

import type { Metadata } from "next";

import { Outfit, Open_Sans } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "PrimeCondies",
  description: "A weather app for rock climbers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
