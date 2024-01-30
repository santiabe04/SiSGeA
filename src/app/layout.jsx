"use client"

import { NextUIProvider } from '@nextui-org/react'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NextUIProvider>
            {children}
        </NextUIProvider>
      </body>
    </html>
  )
}