import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/libs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonel | Full Stack Web Developer',
  description: 'Leonel Sanz Web Developer',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/pointing-up2.png" />
        <link rel="preload" as="image" href="/wave.png" />
      </head>
      <body
        className={cn('bg-[--body-background] scroll-smooth', inter.className)}
      >
        {children}
      </body>
    </html>
  );
};
