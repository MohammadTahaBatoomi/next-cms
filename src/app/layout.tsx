import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

// فونت‌ها
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// متادیتا همراه با favicon
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Modernize Dashboard",
  icons: {
    icon: "/images/landing/favicon.png", // فایل favicon رو در پوشه public بگذار
  },
};

// روت لایه‌ی اصلی
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
