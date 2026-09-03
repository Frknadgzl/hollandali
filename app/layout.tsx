import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hollandalı | Taze • Çıtır • Helal",
  description: "Yeni nesil helal çıtır tavuk, burger ve loaded fries.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${geist.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
