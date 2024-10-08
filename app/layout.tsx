import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { NavbarComponent } from "@/components/navbar"
import { FooterComponent } from "@/components/footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "스테이나음",
  description: "스테이나음 사이트입니다",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERID_MAP}`}
        ></script>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}
