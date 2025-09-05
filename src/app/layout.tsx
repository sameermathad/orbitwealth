import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Orbit Wealth - Empathetic, Goal-Based Financial Planning",
  description: "Professional financial advisory services offering personalized financial planning, asset allocation, investment solutions, and retirement planning. Put your financial future first with Orbit Wealth.",
  keywords: "financial planning, investment advisory, retirement planning, asset allocation, mutual funds, PMS, AIF, global investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
