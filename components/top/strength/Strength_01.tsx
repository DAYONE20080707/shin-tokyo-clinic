// components/strength/Strength_01.tsx
// 当院の特徴（Feature）セクション

"use client"

import Image from "next/image"

// 特徴データ
const featureData = [
  {
    id: "01",
    title: "東京駅八重洲北口徒歩１分",
    description:
      "テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。",
    image: "/images/feature-img01.jpg",
  },
  {
    id: "02",
    title: "完全予約制/待ち時間短縮",
    description:
      "テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。",
    image: "/images/feature-img02.jpg",
  },
  {
    id: "03",
    title: "保険診療・自由診療対応",
    description:
      "テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。テキスト入ります。",
    image: "/images/feature-img03.jpg",
  },
]

// 当院の特徴
const Strength_01 = () => {
  return (
    <section
      className="bg-white rounded-t-[60px] py-16 lg:py-[120px] px-4 lg:px-5"
      id="feature"
    >
      <div className="lg:max-w-[1200px] mx-auto">
        {/* 見出し */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-[#38a1db] text-sm lg:text-lg font-bold tracking-[0.03em] font-en">
            Feature
          </p>
          <h2 className="text-[#38a1db] text-2xl lg:text-[32px] font-bold leading-[1.5] tracking-[0.05em] mt-2">
            当院の特徴
          </h2>
        </div>

        {/* 特徴カード */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {featureData.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-4">
              {/* 画像 */}
              <div className="relative aspect-[373/250] rounded-[20px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* テキスト */}
              <div>
                {/* 番号 */}
                <p className="text-[#347694] text-xl lg:text-2xl font-bold tracking-[0.03em] font-en">
                  {feature.id}
                </p>

                {/* タイトル */}
                <h3 className="text-[#347694] text-lg lg:text-xl font-bold leading-[1.7] mt-1">
                  {feature.title}
                </h3>

                {/* 説明文 */}
                <p className="text-[#393939] text-sm lg:text-base leading-[1.7] tracking-[0.03em] mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Strength_01
