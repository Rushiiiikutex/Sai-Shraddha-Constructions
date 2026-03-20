import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sai Shraddha Constructions | Building Your Vision",
  description:
    "Premium commercial and residential construction company. Licensed, insured, and bonded with 20+ years of experience. Get a free estimate today.",
  keywords: "construction, residential, commercial, remodeling, concrete, foundation, building",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col font-sans overscroll-none">{children}</body>
    </html>
  );
}
