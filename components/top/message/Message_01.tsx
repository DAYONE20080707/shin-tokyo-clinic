// components/message/Message_01.tsx
// 院長挨拶（Greeting）セクション

"use client"

import Image from "next/image"

// 院長挨拶
const Message_01 = () => {
  return (
    <section
      className="bg-[#f3fbfa] rounded-t-[40px] py-16 lg:py-[120px] px-4 lg:px-5"
      id="greeting"
    >
      <div className="lg:max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          {/* 画像 */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="relative aspect-[520/682] rounded-[20px] overflow-hidden">
              <Image
                src="/images/greeting-img.jpg"
                alt="院長 松田 健志"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* テキストコンテンツ */}
          <div className="w-full lg:w-[600px]">
            {/* 見出し */}
            <div className="mb-10 lg:mb-16">
              <p className="text-[#38a1db] text-sm lg:text-lg font-bold tracking-[0.03em] font-en">
                Greeting
              </p>
              <h2 className="text-[#38a1db] text-2xl lg:text-[32px] font-bold leading-[1.5] tracking-[0.05em] mt-2">
                院長のご挨拶
              </h2>
            </div>

            {/* 本文 */}
            <div className="text-[#393939] text-sm lg:text-base leading-[2.5] tracking-[0.03em] space-y-4">
              <p>
                当院は2026年〇月に「シン・東京駅こどもの成長クリニック」をオープンしました。
              </p>
              <p>
                当院では風邪などの一般小児科の診療に加え、こどもの成長・発育に合わせた成長ホルモン外来や頭のかたち外来などの診療も行っております。
                <br />
                また、症状だけを見るのではなく、お子さま一人ひとりの成長やご家庭での様子にも目を向けた診療を心がけています。
              </p>
              <p>
                また、保護者の方が不安を抱えたまま帰ることのないよう、分かりやすい説明と丁寧な対応を大切にしています。
                <br />
                「こんなことで受診していいのかな」と迷うことでも、どうぞお気軽にご相談ください。
              </p>
              <p>
                地域のお子さまたちの健やかな成長を見守る身近なかかりつけ医として、安心して通っていただけるクリニックを目指しています。
              </p>
            </div>

            {/* 署名 */}
            <p className="text-[#393939] text-lg lg:text-[22px] leading-[2.5] tracking-[0.03em] text-right mt-6">
              院長 松田 健志
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message_01
