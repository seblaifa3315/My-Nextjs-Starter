import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from "next";
import { ThemeProvider } from '../context/ThemeContext';


export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS Dark/Light Theme Toggle",
  description: "A simple Next.js starter project using tailwind with global.css set up and dark/light theme toggle set up.",
  icons: {
    icon: '/favicon.png',
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
