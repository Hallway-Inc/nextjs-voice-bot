import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Color Pages Demo",
  description: "A demonstration of different color pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* @ts-expect-error */}
        <hallway-embed character-id="7394103e-ba65-41d8-ac98-a43348cee84f"></hallway-embed>
        <script src="https://hallway.ai/embed-loader.js" async type="text/javascript"></script>
      </body>
    </html>
  );
}
