import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empire Tech | Portfolio",
  description: "Web Developer, Graphics Designer & Bot Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}