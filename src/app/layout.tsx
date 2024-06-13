import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SaaS Landing page",
  description:
    "Free, open-source SaaS landing page template to help you quickly build a beautiful website for your SaaS product.",
  openGraph: {
    title: "Free and Open-Source SaaS Landing Page",
    description:
      "Free, open-source SaaS landing page template to help you quickly build a beautiful website for your SaaS product.",
    type: "website",
    url: "https://saas-landing-bice.vercel.app",
    locale: "en_US",
    siteName: "Free and Open-Source SaaS Landing Page",
    images: [
      {
        url: "https://saas-landing-bice.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free and Open-Source SaaS Landing Page",
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free and Open-Source SaaS Landing Page",
    description:
      "Free, open-source SaaS landing page template to help you quickly build a beautiful website for your SaaS product.",
    images: [
      {
        url: "https://saas-landing-bice.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free and Open-Source SaaS Landing Page",
        type: "image/jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
