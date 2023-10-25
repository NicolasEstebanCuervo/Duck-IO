import Navigation from "../../Components/Navigation"
import "../../styles/globals.css"
import { Space_Grotesk } from "@next/font/google"

const font = Space_Grotesk({
  weight:"400",
  subsets: ["latin"],
  variable: "--fuente"
})

export default function LayoutWithPhrase({ children }) {
  return (
    <html lang="en">
      <head>
        <title>About page</title>
      </head>
      <body className={font.className}>
      <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
