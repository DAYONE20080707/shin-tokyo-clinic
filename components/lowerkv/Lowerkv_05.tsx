"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Lowerkv_05Props {
  subTitle?: string
  mainTitle?: string
  breadcrumbs?: { label: string; href?: string }[]
}

// 装飾付き下層KV（クリニック向け）
const Lowerkv_05 = ({
  subTitle = "FAQ",
  mainTitle = "よくあるご質問",
  breadcrumbs = [
    { label: "トップページ", href: "/" },
    { label: "よくあるご質問" },
  ],
}: Lowerkv_05Props) => {
  return (
    <div className="relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/bg-img.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* 装飾図形 - ミント色 */}
      <div className="absolute top-10 left-0 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] bg-[#73c6be]/30 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* 装飾図形 - オレンジ色 */}
      <div className="absolute bottom-0 right-0 w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] bg-accentColor/30 rounded-full translate-x-1/3 translate-y-1/3" />

      {/* コンテンツ */}
      <div className="relative z-10 pt-24 lg:pt-32 pb-6 lg:pb-10">
        {/* パンくずリスト */}
        <div className="lg:max-w-[1200px] mx-auto px-5 lg:px-[120px]">
          <nav className="flex items-center gap-2 text-xs text-[#393939]">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3 h-3" />
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* タイトル */}
        <div className="lg:max-w-[1200px] mx-auto px-5 lg:px-[120px] mt-10 lg:mt-20 pb-16 lg:pb-24">
          <h1>
            <span className="block text-primaryColor  font-poppins text-base lg:text-lg font-bold tracking-wide mb-2">
              {subTitle}
            </span>
            <span className="block text-[#393939] text-3xl lg:text-[64px] font-medium leading-tight">
              {mainTitle}
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Lowerkv_05
