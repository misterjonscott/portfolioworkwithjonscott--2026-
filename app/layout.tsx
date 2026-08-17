import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google"; 
import "./globals.css";

// 1. Configure your Body Font
const lato = Lato({
  variable: "--font-body-lato",
  subsets: ["latin"],
  weight: ['300', '400', '700'],
});

// 2. Configure your crisp Title Font
const geistTitle = Geist({
  variable: "--font-title-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jon Scott - UX Design and Development",
  description: "The works and a hint of personality of Jon Scott, a UX designer and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Inject both distinct variables into the body global wrapper */}
      <body className={`${lato.variable} ${geistTitle.variable} antialiased font-body text-foreground`}>
          {children}
      </body>
    </html>
  );
}