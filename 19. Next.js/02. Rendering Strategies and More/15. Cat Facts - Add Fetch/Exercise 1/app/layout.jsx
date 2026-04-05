import "./globals.css"

export const metadata = {
    title: "Cat Facts",
    description: "A fun app for learning about cats using the Cat Facts API!",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body>{children}</body>
        </html>
    )
}
