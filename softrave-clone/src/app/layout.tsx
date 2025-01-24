import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notosans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notosans.className}  antialiased bg-secondary `}>
        {children}
      </body>
    </html>
  );
}