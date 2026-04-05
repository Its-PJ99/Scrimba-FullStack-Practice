export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <h1>I'm part of the shared content between pages!</h1>
        {children}
      </body>
    </html>
  )
}