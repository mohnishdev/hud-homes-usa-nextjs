import './globals.css'

export const metadata = {
  title: 'HUD Homes USA – Registration',
  description: 'Get instant access to Foreclosure Deals as low as $10,000',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}