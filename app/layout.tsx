import "./globals.css"
import type { Metadata, Viewport } from "next"
import ToastProvider from "@/components/providers/ToastProvider"
import { Zen_Kaku_Gothic_New, Lato } from "next/font/google"
import { GoogleTagManager } from "@/components/ui/module/GoogleTagManager"

// Zen Kaku Gothic New フォントの設定
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

// 英字 フォントの設定
const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
})

export const metadata: Metadata = {
  title: {
    template: "%s | シン・東京駅こどもの成長クリニック",
    default: "シン・東京駅こどもの成長クリニック｜東京駅徒歩1分の小児科",
  },
  description: "東京駅八重洲北口から徒歩1分。一般小児科、低身長外来、あたまのかたち外来、乳幼児健診、予防接種など、お子さまの成長・発育をサポートします。地域のかかりつけ医として、お気軽にご相談ください。",
  icons: {
    icon: "/common/favicon.png",
  },
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={`${zenKakuGothicNew.className} text-baseColor ${lato.variable}`}>
        <GoogleTagManager gtmId="GTM-XYZ" />
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
