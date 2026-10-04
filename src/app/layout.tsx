import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soulparodox | Apparel Sourcing Partner",
  description:
    "Soulparodox is a Toronto-headquartered apparel sourcing partner with offices in Toronto, London, Dhaka, and Colombo.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Soulparodox",
    title: "Soulparodox | Apparel Sourcing Partner",
    description:
      "Soulparodox is a Toronto-headquartered apparel sourcing partner with offices in Toronto, London, Dhaka, and Colombo.",
  },
  twitter: {
    card: "summary",
    title: "Soulparodox | Apparel Sourcing Partner",
    description:
      "Soulparodox is a Toronto-headquartered apparel sourcing partner with offices in Toronto, London, Dhaka, and Colombo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
