import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";  // Import Head from next/head
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
  title: "Monitoria Digital",
  description: "Login no Monitoria Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <script src="https://meet.jit.si/external_api.js" defer></script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </>
  );
}
