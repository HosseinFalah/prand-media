import { Inter } from 'next/font/google'
import './font.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'پرند مدیا',
  description: 'پرند مدیا شامل خدمات طراحی سایت و برنامه نویسی و سئو سایت و انجام پروژه های گرافیکی',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir='rtl' className={inter.className}>
      <body className="font-yekan">
        {children}
      </body>
    </html>
  )
}
