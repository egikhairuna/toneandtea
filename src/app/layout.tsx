import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { stefanFont, neueFont } from "./fonts";

export const metadata: Metadata = {
  title: "Tone & Tea | Premium Yoga and Wellness",
  description: "It's a feeling that sits between toning up and whining down. Premium yoga retreat or spa brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueFont.variable} ${stefanFont.variable} antialiased font-sans selection:bg-tone-rose/30`}
      >
        {children}
      </body>
    </html>
  );
}
