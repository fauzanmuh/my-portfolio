"use client";

import { Comic_Neue, Rubik } from "next/font/google";
import "./css/globals.css";
import "./css/style.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} ${comicNeue.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
