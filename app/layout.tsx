import type { Metadata } from "next";
import { Merriweather, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const serif = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const mono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICAC | Enter the Void",
  description: "Inter Campus Algorithmic Cup - Only the Sharpest Minds Return from the Upside Down.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${mono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
