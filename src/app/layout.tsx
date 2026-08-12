import type { Metadata } from "next";
import "./globals.css";
import { stefanFont, neueFont } from "./fonts";

export const metadata: Metadata = {
  title: "Tone & Tea | Premium Yoga and Mat Pilates Studio",
  description: "A modern sanctuary where dynamic movement meets mindful stillness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueFont.variable} ${stefanFont.variable} antialiased font-sans selection:bg-tone-rose/30 min-h-screen bg-tone-cream`}
      >
        {children}
      </body>
    </html>
  );
}


