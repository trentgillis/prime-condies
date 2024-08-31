import "@/styles/reset.scss";
import "@/styles/global.scss";

import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
