import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Baja Home & Paws — Home & Pet Sitting in Los Cabos",
  description:
    "Professional home and pet sitting in Los Cabos, Palmilla, and San Diego. Run by Jimena Ariño and Andres Kayo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
