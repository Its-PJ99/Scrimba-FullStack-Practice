import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

/**
 * Challenge:
 * Update the header code so our users can more easily navigate between routes.
 * For now, send the "3d Models" link to a non-existant "/3d-models" route,
 * we'll work on creating that page soon.
 * 
 * For the logo images, you can surround the entire `div` containing the images
 * with the Link component.
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative cursor-pointer">
              {/* Desktop Logo */}
              <img
                src={PFLogo.src}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile Logo */}
              <img
                src={PFLogoIcon.src}
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <li className="text-sm uppercase cursor-pointer">3D Models</li>
              <li className="text-sm uppercase cursor-pointer">About</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
