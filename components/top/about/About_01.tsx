// components/top/about/About_01.tsx
// 当院の特徴（選ばれる理由）セクション

"use client"

import Image from "next/image"
import SectionContent from "@/components/ui/frame/SectionContent"

// 特徴データ
const features = [
  {
    number: "01",
    title: "東京駅八重洲北口徒歩１分",
    description:
      "テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。",
    image: "/images/feature-img01.jpg",
  },
  {
    number: "02",
    title: "完全予約制/待ち時間短縮",
    description:
      "テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。",
    image: "/images/feature-img02.jpg",
  },
  {
    number: "03",
    title: "保険診療・自由診療対応",
    description:
      "テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。",
    image: "/images/feature-img03.jpg",
  },
]

const About_01 = () => {
  return (
    <SectionContent id="about" className="bg-white">
      <section className="w-full lg:max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="mb-16">
          <p className="font-bold text-lg tracking-[0.03em] text-[#38a1db] font-en">
            Feature
          </p>
          <h2 className="text-[32px] lg:text-[32px] font-bold leading-[1.5] tracking-[0.05em] text-[#38a1db] mt-2">
            当院の特徴
          </h2>
        </div>

        {/* 特徴カード */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4"
            >
              {/* 画像 */}
              <div className="relative w-full h-[250px] rounded-[20px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* テキストコンテンツ */}
              <div className="flex flex-col gap-1">
                {/* 番号 */}
                <p className="font-bold text-2xl tracking-[0.03em] text-[#347694] font-en">
                  {feature.number}
                </p>

                {/* タイトルと説明 */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold leading-[1.7] text-[#347694]">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-[1.7] text-baseColor">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionContent>
  )
}

export default About_01
