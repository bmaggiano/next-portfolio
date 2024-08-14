// app/layout.tsx
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header';
import { Separator } from '@/components/ui/separator';

const montserrat = Montserrat({ subsets: ['latin'] });

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
      <body className={montserrat.className}>
        <Header />
        <Separator />
        {children}
      </body>
    </html>
  );
}