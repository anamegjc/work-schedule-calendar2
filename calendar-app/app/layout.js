import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Work Schedule',
  description: 'Monthly work schedule calendar',
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <base href={basePath + '/'} />
      </head>
      <body>{children}</body>
    </html>
  );
}
