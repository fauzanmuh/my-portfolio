import type { Metadata } from "next";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-fauzanmuh.vercel.app/";
const previewImage = "/assets/my-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Fauzan | Web Developer",
  description:
    "Portfolio of Muhammad Fauzan, a Web Developer focused on building high-performance, scalable, and maintainable web applications.",
  keywords: [
    "Muhammad Fauzan",
    "Muhammad",
    "Fauzan",
    "Muhammad Fauzan Portfolio",
    "Portfolio Web Developer",
    "Web Developer",
    "Portfolio",
    "Contact Information",
  ],
  openGraph: {
    title: "Muhammad Fauzan | Web Developer",
    description:
      "Explore projects, skills, certificates, and contact information from Muhammad Fauzan.",
    url: siteUrl,
    siteName: "Muhammad Fauzan Portfolio",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Muhammad Fauzan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fauzan | Web Developer",
    description:
      "Explore projects, skills, certificates, and contact information from Muhammad Fauzan.",
    images: [previewImage],
  },
  icons: {
    icon: "/assets/my-logo.png",
    shortcut: "/assets/my-logo.png",
    apple: "/assets/my-logo.png",
  },
};

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
