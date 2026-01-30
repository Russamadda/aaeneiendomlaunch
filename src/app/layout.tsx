import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AAEN Eiendom – Totalentreprenør i Bergen",
  description:
    "AAEN Eiendom leverer rehabilitering, modernisering og vaktmestertjenester i Bergen med fokus på presisjon og kvalitet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={font.className + " bg-stone-50"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
