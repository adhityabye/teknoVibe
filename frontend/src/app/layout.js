import { Inter, Josefin_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata = {
  title: 'TeknoVibe',
  description: 'Web App yang mengintegrasikan informasi event di lingkungan Fakultas Teknik UGM',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.variable} ${josefin.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
