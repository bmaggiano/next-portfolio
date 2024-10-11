// app/layout.tsx
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Maggiano",
  description: "From concept to code. Welcome to my portfolio.",
  openGraph: {
    images: [
      {
        url: `https://next-portfolio-rose-one.vercel.app/api/og`,
        width: 1200,
        height: 630,
        alt: "From concept to code. Brandon Maggianos portfolio.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        <Separator />
        {children}
      </body>
    </html>
  );
}
