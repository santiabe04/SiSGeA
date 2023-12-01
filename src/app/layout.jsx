import './globals.css'

export const metadata = {
  title: 'SiSGeA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}