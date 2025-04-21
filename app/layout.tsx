// dont mind my comments, I just wanna refer to them in the future! lol

// This loads the Nunito font from Google via Next.js built-in system
import { Nunito } from 'next/font/google';

// I'll import our base styles (Tailwind, global css)
import './globals.css'

// let us load Nunito with a variable name and the font weights that we want
const nunito = Nunito({
  subsets: ['latin'],                     // we only need the basic latin letters
  variable: '--font-sans',                // Tailwind will be using this CSS variable
  weight: ['400', '600', '700'],          // Light, semi-bold, and bold weight
})

// Here goes our optional site metadata (this is used by Next.js for <head> generation)
export const metadata = {
  title: 'Gratitrack',
  description: 'Gratitude, one day at a time.',
}

// Root layout wraps the whole app!
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Nunito font is applied here via className
    <html lang='en' className={nunito.variable}>
      {/* 
      font-sans uses the Nunito font I defined in tailwind.config.ts
      antialiased makes the fonts render smoother (especially on macOS!)
      bg/text colors are base theme colors
      */}
      <body
        className='font-sans antialiased bg-[#F9F9F6] text-[#333]'
      >
        {children}
      </body>
    </html>
  )
}