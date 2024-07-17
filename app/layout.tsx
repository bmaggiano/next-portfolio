// app/layout.tsx
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header';
import { Separator } from '@/components/ui/separator';

const montserrat = Montserrat({ subsets: ['latin'] });


export const metadata = {
  title: "Brandon's Site",
  description: 'A showcase of clean UI, design elements, and personal projects.',
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