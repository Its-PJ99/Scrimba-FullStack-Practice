import "./global.css"
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/posts">Posts</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>&copy; {new Date().getFullYear()} Generic Web Dev, LLC.</footer>

      </body>
    </html>
  )
}