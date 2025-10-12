import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const url = "https://your-domain.com"; //soon
const title = "Saul Plascencia | Portfolio";
const description = "Saul Plascencia's personal website and portfolio";
const name = "Saul Plascencia";
const image = `${url}/me.jpg`;

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name }],
  creator: name,
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Saul",
    images: [
      {
        url: image,
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}