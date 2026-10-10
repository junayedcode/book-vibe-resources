
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Shaerd/Navber";
import BooksProvider from "@/components/context/BooksContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "Discover and manage your favorite books.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <BooksProvider>
          <Navber />

          {children}

          <h2 className="bg-yellow-500 py-7 text-center text-5xl font-bold">
            Footer
          </h2>

          <ToastContainer aria-label="Notifications" />
        </BooksProvider>
      </body>
    </html>
  );
}
