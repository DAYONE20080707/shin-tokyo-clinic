// components/kv/KeyVisual_01.tsx
// Figma: 東京駅こどもの成長クリニック KV（メインビジュアル）

"use client"

import Image from "next/image"
import FirstViewContent from "@/components/top/kv/FirstViewContent"

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <FirstViewContent className="relative">
      <section className="relative px-5 lg:px-20 pb-10 lg:pb-20 pt-[85px] lg:pt-[160px]">
        {/* 背景画像コンテナ - 角丸 */}
        <div className="relative w-full h-[60vh] lg:h-[80vh] rounded-[40px] lg:rounded-[80px] overflow-hidden">
          {/* 背景画像 */}
          <Image
            src="/images/mv-img.jpg"
            alt="地域のお子様・ご家族のかかりつけ医に"
            fill
            priority
            className="object-cover object-center"
          />

          {/* グラデーションオーバーレイ（下部を暗く） */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

          {/* テキストコンテンツ */}
          <div className="absolute left-5 lg:left-24 bottom-10 lg:bottom-20 max-w-[600px]">
            <h1 className="text-white font-bold text-3xl lg:text-[50px] leading-[1.4] tracking-[0.05em] mb-4">
              地域のお子様・ご家族の
              <br />
              かかりつけ医に
            </h1>
            <p className="text-white text-sm lg:text-lg leading-[1.6] tracking-[0.05em]">
              見出しテキストはいります見出しはいります見出しテキストはいります見出しはいります
            </p>
          </div>
        </div>
      </section>
    </FirstViewContent>
  )
}

export default KeyVisual_01
