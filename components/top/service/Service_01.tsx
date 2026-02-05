// components/top/service/Service_01.tsx
// 診療案内セクション

"use client"

import Image from "next/image"
import Link from "next/link"
import SectionContent from "@/components/ui/frame/SectionContent"
import { ChevronRight } from "lucide-react"

// 診療メニューデータ
const treatments = [
  {
    id: 1,
    title: "一般小児外来",
    icon: "/images/treatment-icon01.svg",
    bgColor: "#e6eef8",
    href: "/coming-soon",
  },
  {
    id: 2,
    title: "低身長外来",
    icon: "/images/treatment-icon02.svg",
    bgColor: "#edebfa",
    href: "/coming-soon",
  },
  {
    id: 3,
    title: "あたまのかたち外来",
    icon: "/images/treatment-icon03.svg",
    bgColor: "#f7efe8",
    href: "/coming-soon",
  },
  {
    id: 4,
    title: "乳幼児健診",
    icon: "/images/treatment-icon04.svg",
    bgColor: "#fdeef8",
    href: "/coming-soon",
  },
  {
    id: 5,
    title: "予防接種",
    icon: "/images/treatment-icon05.svg",
    bgColor: "#fff6c9",
    href: "/coming-soon",
  },
  {
    id: 6,
    title: "でべそ外来",
    icon: "/images/treatment-icon06.svg",
    bgColor: "#fff0e1",
    href: "/coming-soon",
  },
  {
    id: 7,
    title: "夜尿症外来",
    icon: "/images/treatment-icon07.svg",
    bgColor: "#eaf5f3",
    href: "/coming-soon",
  },
]

const Service_01 = () => {
  return (
    <SectionContent id="service" className="bg-white">
      <section className="w-full lg:max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="mb-16">
          <p className="font-bold text-lg tracking-[0.03em] text-primaryColor font-en">
            Treatment
          </p>
          <h2 className="text-[32px] lg:text-[32px] font-bold leading-[1.5] tracking-[0.05em] text-primaryColor mt-2">
            診療案内
          </h2>
        </div>

        {/* 診療メニューカード */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {treatments.map((treatment) => (
            <Link
              key={treatment.id}
              href={treatment.href}
              className="w-full sm:w-[calc(50%-20px)] lg:w-[270px] rounded-[20px] p-6 flex flex-col items-center gap-4 transition-transform hover:scale-105"
              style={{ backgroundColor: treatment.bgColor }}
            >
              {/* アイコン */}
              <div className="relative w-[150px] h-[100px] flex items-center justify-center">
                <Image
                  src={treatment.icon}
                  alt={treatment.title}
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* タイトル */}
              <p className="text-xl font-bold leading-[1.7] text-baseColor text-center">
                {treatment.title}
              </p>
            </Link>
          ))}
        </div>

        {/* 詳しく見るボタン */}
        <div className="flex justify-center">
          <Link
            href="/coming-soon"
            className="flex items-center justify-between w-[350px] px-6 py-4 bg-[#f5a623] rounded-[40px] text-white font-bold text-base leading-[1.7] transition-opacity hover:opacity-80"
          >
            <span>詳しく見る</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-[#f5a623]" />
            </div>
          </Link>
        </div>
      </section>
    </SectionContent>
  )
}

export default Service_01
