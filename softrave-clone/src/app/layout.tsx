import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/FrontEnd/Navbar";
import Contact from "@/components/FrontEnd/Contact";
import Footer from "@/components/FrontEnd/Footer";
import Smooth_Scroll from "@/components/FrontEnd/Smooth_Scroll";

const notosans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softrave - UI/UX Design and Web Development Services",
  description:
    "Professional UI/UX design and web development services to bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notosans.className}  antialiased bg-secondary`}>
        <Smooth_Scroll />
        <header className="fixed top-0 h-[50vh] z-20 w-full px-5">
          <Navbar />
        </header>
        <div className="overflow-hidden">
          {children}
          <section id="contact" className=" min-h-[50vh]  sm:min-h-dvh ">
            <Contact />
          </section>
          <section
            id="footer"
            className="  min-h-[70dvh] sm:h-[60vh]  w-screen bg-[#313131] relative flex flex-col  justify-end gap-20 px-5  sm:px-16 "
          >
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}
