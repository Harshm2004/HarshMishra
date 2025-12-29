import './globals.css'

export const metadata = {
  title: 'Harsh Mishra - Portfolio',
  description: 'Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
