import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "وصلة خدمات المساندة الادارية | Administrative Support Services",
  description:
    "وصلة لخدمات المساندة الإدارية تقدم حلول شاملة في المساعدة الطبية، التأشيرات، وخدمات السفر الطبية. فريق متخصص لدعمك خطوة بخطوة.",
  keywords: [
    "خدمات إدارية",
    "خدمات طبية",
    "تأشيرات طبية",
    "Medical Support",
    "Administrative Services",
    "Medical Travel",
    "Healthcare Assistance",
  ],
  openGraph: {
    title: "وصلة خدمات المساندة الادارية",
    description:
      "أفضل الحلول الإدارية والطبية، من المساعدة في التأشيرات إلى تنظيم السفر الطبي.",
    url: "https://mmm-smoky-six.vercel.app/", // غيّرها للرابط تبعك
    siteName: "وصلة خدمات المساندة الادارية",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // صورة social share
        width: 1200,
        height: 630,
        alt: "وصلة خدمات المساندة الادارية",
      },
    ],
    locale: "ar_JO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "وصلة خدمات المساندة الادارية",
    description: "حلول إدارية وطبية متكاملة لدعمك في السفر والعلاج بالخارج.",
    images: ["https://yourdomain.com/twitter-image.jpg"], // نفس صورة OG أو غيرها
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className=" relative flex flex-col min-h-screen ">
          <div className="flex-1">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
