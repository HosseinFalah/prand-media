import Header from '@/common/Header';
import yekanFont from '@/constants/LocalFonts';
import './globals.css';

export const metadata = {
  title: 'پرند مدیا',
  description: 'پرند مدیا شامل خدمات طراحی سایت و برنامه نویسی و سئو سایت و انجام پروژه های گرافیکی',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body className={`${yekanFont.variable} font-sans`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;