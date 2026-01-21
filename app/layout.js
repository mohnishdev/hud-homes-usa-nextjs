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
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}