import "./globals.css";

/**
 * Challenge: Add the header to the project
 * 
 * Hint: for the printforge logo(s), use a string src on the `<img />`:
 * src="/printforge-logo.svg" (Desktop logo)
 * src="/printforge-logo-icon.svg" (Mobile logo)
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
