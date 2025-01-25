import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/FrontEnd/Navbar";

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
        <header className="fixed top-0 z-10 w-full px-5">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
