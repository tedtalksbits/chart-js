import './globals.css';
import { Inter } from 'next/font/google';
import Nav from './nav';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard 🧑‍💼',
  description: 'Your personalized dashboard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Suspense fallback='Loading...'>
          <Nav />
        </Suspense>
        <main className='p-4 max-w-7xl mx-auto'>{children}</main>
      </body>
    </html>
  );
}
