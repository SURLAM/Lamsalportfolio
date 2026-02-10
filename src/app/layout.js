import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sureshlamsal.com | Frontend Developer",

  description: "Welcome to my portfolio website!",
  keywords: [
    "Next.js",
    "React",
    "Frontend Developer",
    "Portfolio",
    "Web Design",
    "Tailwind CSS",
  ],
  authors: [{ name: "Suresh Lamsal" }],
  creator: "Suresh Lamsal",
  openGraph: {
    title: "Suresh Lamsal | Frontend Developer",
    description:
      "Crafting elegant, modern, and high-performance websites using Next.js.",
    url: "https://sureshlamsal.com", // your website URL
    siteName: "Suresh Lamsal Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Popup />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
