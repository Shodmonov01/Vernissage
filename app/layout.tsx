import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

import { ToastContainer } from "react-toastify";
import Image from "next/image";
import FixedContacts from "@/components/FixedContacts";
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../Assets/TildaSans/TildaSans-VF.woff2",
  display: "swap",
  variable: "--tilda-sans",
});

export const metadata: Metadata = {
  title: "Vernissage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <ToastContainer progressClassName={"toast"} />
        <div
          className="container 
  "
        >
          <FixedContacts />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
