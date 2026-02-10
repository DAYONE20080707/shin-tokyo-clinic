// components/kv/KeyVisual_01.tsx
// Figma: 東京駅こどもの成長クリニック KV（メインビジュアル）

"use client"

import Image from "next/image"
import FirstViewContent from "@/components/top/kv/FirstViewContent"

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <FirstViewContent className="relative">
      <section className="relative px-5 lg:px-20 pb-10 lg:pb-20 pt-[100px] lg:pt-[140px]">
        {/* 背景画像コンテナ - 角丸 */}
        <div className="relative w-full h-[60vh] lg:h-[80vh] rounded-[40px] lg:rounded-[80px] overflow-hidden">
          {/* 背景画像 - SP */}
          <Image
            src="/images/sp-mv-img.jpg"
            alt="お子様の成長に寄り添う小児科クリニック"
            fill
            priority
            className="object-cover object-center lg:hidden"
          />
          {/* 背景画像 - PC */}
          <Image
            src="/images/mv-img02.jpg"
            alt="お子様の成長に寄り添う小児科クリニック"
            fill
            priority
            className="object-cover object-center hidden lg:block"
          />

          {/* グラデーションオーバーレイ（下部を暗く） */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

          {/* テキストコンテンツ */}
          <div className="absolute left-5 lg:left-24 bottom-20 lg:bottom-36 max-w-[600px]">
            <h1 className="text-white font-bold text-[22px] lg:text-[50px] leading-[1.4] tracking-[0.05em] whitespace-nowrap">
              お子様の成長に寄り添う<br />
              小児科クリニック
            </h1>
          </div>
        </div>
      </section>
    </FirstViewContent>
  )
}

export default KeyVisual_01
