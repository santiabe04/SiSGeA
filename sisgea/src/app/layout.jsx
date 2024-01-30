"use client"

import { Montserrat } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}