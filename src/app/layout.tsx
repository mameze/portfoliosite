import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steve's Portfolio",
  description: "Aspiring Systems Engineer & Backend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white`}
      >
        {}
      <nav className="w-full flex justify-end gap-6 p-4 bg-black/40 backdrop-blur-md fixed top-0 left-0 z-50 pr-8">
  <Link
    href="/"
    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
  >
    Home
  </Link>
  <Link
    href="/stack"
    className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition"
  >
    Stack
  </Link>
  <span className="px-4 py-2 rounded-lg bg-green-600 opacity-50 cursor-not-allowed">
    Projects
  </span>
  <Link
    href="/contact"
    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
  >
    Contact
  </Link>
</nav>


        {}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
