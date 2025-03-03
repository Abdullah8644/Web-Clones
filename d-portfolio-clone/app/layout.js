import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Blinker } from "next/font/google";

const blinker = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  weight:"400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${blinker.className}   bg-neutral-900  `}
      >
        {children}
      </body>
    </html>
  );
}
