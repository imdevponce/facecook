import type { Metadata } from "next";
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FaceCook",
  description: "A social networking platform for chefs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/facecook-logo.png" />
      </head>
      <body className={inter.className}>
        <SideBar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
