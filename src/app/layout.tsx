"use client";

import { Rubik } from "next/font/google";
import "./css/globals.css";
import "./css/style.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable}`}>
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
