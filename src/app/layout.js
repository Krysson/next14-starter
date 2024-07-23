import { Inter } from 'next/font/google' // change the font here to whatever you want
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App', // change the title here
  description: 'Next.js starter app' // change the description here
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
          {children} {/* Import other components above or below the {children} tag */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
