// components/strength/Strength_01.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import StrengthCard from "@/components/ui/ItemCard/StrengthCard_01"
import { strengthData } from "@/data/strengthData"
import MoreLinkButton from "@/components/ui/button/MoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"
import ContentHeadlineReverse from "@/components/ui/frame/ContentHeadlineReverse"
import Image from "next/image"

// 強み
const Strength_01 = () => {
  return (
    <>
      <SectionContent className="rounded-t-[40px]" variant="dot">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="lg:max-w-[1200px] mx-auto space-y-10">
          <ContentHeadlineReverse
            subTitle="Instagram"
            mainTitle="チョイスの活動を\nご紹介します。"
            className="text-center text-white"
          />

          {/* gridレイアウトを使用して2列（モバイル）・4列（デスクトップ）に画像を配置 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* 8枚の画像を表示 */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg border border-white/20"
              >
                <Image
                  src={`/top/instagram/instagram_img${index}.jpg`}
                  alt={`Instagram Image ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
        <div className="mt-16 flex justify-center">
          <MoreLinkButton href="/" variant="accent">
            Follow us
          </MoreLinkButton>
        </div>
      </SectionContent>
    </>
  )
}

export default Strength_01
